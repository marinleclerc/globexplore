import { SplitText } from "gsap/SplitText"

const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger, SplitText);

if (jQuery("section").hasClass("main-hero-section-copy")) {

    var reveal = gsap.timeline();

    gsap.set(".navigation", { opacity: 0 });

    reveal.to('.navigation', { opacity: 1, duration: 1, delay: 1 });


}