import { SplitText } from "gsap/SplitText"

const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger, SplitText);

if (jQuery("section").hasClass("main-hero-section")) {


    const splitLines = new SplitText('.main-hero-section h1', {
        type: "chars, words",
        charsClass: "chars chars++"
    });


    const quote = document.querySelector(".main-hero-section h1");
    const letters = Array.from(quote.querySelectorAll(".main-hero-section h1 .chars"));

    var reveal = gsap.timeline();


    gsap.set(letters, { opacity: 0, y: 5 });


    reveal.to('.loader', { opacity: 0, duration: 0.6, delay: 1.5 })

    reveal.to('.img-wrapper', { transform: 'translate(-50%, -50%) scale(1)', duration: 1.5 })
        .to('.main-hero-section h1 .chars', { opacity: 1, y: 0, stagger: 0.02, delay: -1 })
        .to('.main-hero-section .target p', { opacity: 1, y: 0, delay: -1, duration: 1 })
        .to('.main-hero-section .target a.btn', { opacity: 1, duration: 1, delay: -1 });


}