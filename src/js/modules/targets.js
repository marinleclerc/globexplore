import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

if ($(".targets").length > 0 || $(window).width() < 992) {
    const targetsSwiper = new Swiper('.targets .responsive-wrapper', {
        centeredSlides: true,
        direction: 'horizontal',
        slidesPerView: 'auto',
        loop: false,
        mousewheel: false,
        freeMode: false,
        cursorGrab: true,
        slideToClickedSlide: true, 
        spaceBetween: 45,
                // Ajoutez les options de navigation pour les contrôles suivant/précédent
                navigation: {
                    nextEl: '.targets .controller.next',
                    prevEl: '.targets .controller.previous',
                },
    });

}