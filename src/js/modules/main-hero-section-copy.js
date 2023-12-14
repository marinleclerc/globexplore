import { SplitText } from "gsap/SplitText"
const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');


if (jQuery("section").hasClass("main-hero-section-copy")) {


    const splitTitle = new SplitText('.main-hero-section-copy h1', {
        type: "chars, words",
        charsClass: "chars chars++"
    });

    const title = document.querySelector(".main-hero-section-copy h1");
    const lettersTitle = Array.from(title.querySelectorAll(".main-hero-section-copy h1 .chars"));

    const splitLines = new SplitText('.featured-text', {
        type: "words, chars",
        charsClass: "chars chars++"
    });


    const quote = document.querySelector(".main-hero-section-copy .featured-text p");
    const letters = Array.from(quote.querySelectorAll(".main-hero-section-copy .featured-text .chars"));
    console.log('letters:', letters)

    function setupAnimation() {
        // Hide all letters initially
        gsap.set(letters, { opacity: 0, y: 5 });

        // Apply stagger to the letters array
        gsap.to(letters, {
            opacity: 1,
            y: 0,
            stagger: 0.02, // Apply stagger here
            scrollTrigger: {
                trigger: quote,
                start: "50% 80%",
                end: "50% 20%",
            },
        });
    }

    setupAnimation();

    let selector = ".main-hero-section-copy";

    // Sélectionnez votre élément clip
    const clipElement = document.querySelector('.clip');

    // Créez une timeline pour l'animation
    const clipTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: clipElement,
            start: 'top top',
            end: 'bottom bottom',
            markers: false,
            scrub: true,
            pin: true,
            startTrigger: selector,
            endTrigger: selector,
            // Effet de "scrub" pour lier au défilement
        }
    });

    //.addLabel('clip', 'start+=0.15')
    /* 
            .fromTo(clipElement, {
                clipPath: 'inset(0% 0% round 0vw)'
            }, {
                clipPath: 'inset(50% 50% round 23vw)'
            }) */


    clipTimeline
        .addLabel('start', 0)
        .addLabel('clip', 'start+=0.15')
        .set(clipElement, { clipPath: 'inset(0% 0% round 0vw)' })
        .to(clipElement, {
            clipPath: 'inset(29% 39% round 23vw)',
            ease: 'linear',
        })
        .to(clipElement, {
            clipPath: 'inset(50% 50% round 23vw)',
            ease: 'linear',
        })


    /*         .to(clipElement, {
            clipPath: 'inset(50% 50% round 23vw)',
            duration: 1,
        }) */
    /*  
    .to(clipElement, {
        clipPath: 'inset(10% 30% round 15vw)',
        duration: 1,
    }); */




    // Créez une timeline pour l'animation
    const otherClipTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: 'top top',
            end: 'bottom bottom',
            markers: false,
            onEnter: () => {
                otherClipTimeline.to(".main-hero-section-copy h1", {
                    opacity: 0,
                })
                otherClipTimeline.to(".main-hero-section-copy .description", {
                    opacity: 0,
                })
            }
            // Effet de "scrub" pour lier au défilement
        }
    });

    const otherSecondClipTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: 'top top',
            end: '50% 50%',
            markers: false,
            onEnterBack: () => {
                otherClipTimeline.to(".main-hero-section-copy .description", {
                    opacity: 1,
                })
                otherClipTimeline.to(".main-hero-section-copy h1", {
                    opacity: 1,
                })
            }
            // Effet de "scrub" pour lier au défilement
        }
    });


    gsap
        .timeline({
            defaults: {
                duration: 1.2,
                ease: 'expo.inOut',
            },
        })
        .addLabel('start', 0)
        .set(clipElement, { willChange: 'clip-path' })
        .set(lettersTitle, { opacity: 0, y: 5 })

        .addLabel('clip', 'start+=0.15')

        .fromTo(clipElement, {
            clipPath: 'inset(29% 39% round 23vw)'
        }, {
            clipPath: 'inset(0% 0% round 0vw)'
        }, 'clip+=0.1')
        .to(lettersTitle, {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            delay: -1 // Apply stagger here
        })
        .to(".main-hero-section-copy .description", {
            opacity: 1,
            delay: -1 // Apply stagger here
        })

}