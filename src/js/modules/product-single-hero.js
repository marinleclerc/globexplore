import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

if ($(".product-single-hero").length > 0) {
    const SwiperProducts = new Swiper('.product-single-hero .swiper-container', {
        centeredSlides: true,
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        mousewheel: false,
        freeMode: false,
        cursorGrab: false,
        slideToClickedSlide: false,
        spaceBetween: 0,
        navigation: {
            nextEl: '.product-single-hero .controller.next',
            prevEl: '.product-single-hero .controller.previous',
        },
    });
}