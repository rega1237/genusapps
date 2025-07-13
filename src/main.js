import './style.css'
import carrusel from './js/carrusel.js';
import mobileMenu from './js/mobileMenu.js';

import './style.css'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // Importa los estilos de Swiper

document.addEventListener('DOMContentLoaded', () => {
  // Configuración del carrusel de testimonios
  const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    // Activa el bucle infinito
    loop: true,

    // Centra el slide activo
    centeredSlides: true,

    // Efecto de "flujo" de tarjetas
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: false, // Desactivamos las sombras por defecto para usar las de Tailwind
    },
    
    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // Espacio entre slides
    spaceBetween: 20,

    // Cuántos slides se ven a la vez (responsive)
    slidesPerView: 1.2, // En móvil, se ve una tarjeta completa y un poco de la siguiente
    breakpoints: {
      // Para pantallas de más de 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Para pantallas de más de 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    // Paginación (los puntos inferiores)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navegación (flechas)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  mobileMenu();
  carrusel();
});