/* import { SplitText } from "gsap/SplitText"

const { gsap } = require("gsap/dist/gsap");
var ScrollTrigger = require('gsap/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger, SplitText);


if (jQuery("section").hasClass("main-hero-section")) {


    const splitLines = new SplitText('.featured-text', {
        type: "chars",
        charsClass: "chars chars++"
    });


    const quote = document.querySelector(".main-hero-section .featured-text p");
    const letters = Array.from(quote.querySelectorAll(".main-hero-section .featured-text .chars"));

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


















    // Obtenir la largeur et la hauteur de l'écran
    const largeurEcran = window.innerWidth;
    const hauteurEcran = window.innerHeight;

    // Calculer la diagonale de l'écran en utilisant la formule de Pythagore
    const diagonaleEcran = Math.sqrt(largeurEcran ** 2 + hauteurEcran ** 2);

    // Définir la taille de l'image
    const tailleImage = diagonaleEcran + "px";
    console.log('tailleImage:', tailleImage)

    // Appliquer la taille à l'élément image
    const imageElement = document.querySelector(".img-wrapper");
    imageElement.style.width = tailleImage;
    imageElement.style.height = tailleImage;

    var reveal = gsap.timeline();

    let selector = ".main-hero-section";

    let triggerImage = ".main-hero-section .overlay";

    let Image = ".sur-wrapper";

    var pinImage = gsap.timeline({
        scrollTrigger: {
            trigger: Image,
            markers: false,
            pin: true,
            pinSpacing: true,
            startTrigger: triggerImage,
            endTrigger: triggerImage,
            start: 'top 0%',
            end: "bottom 0%",
        }
    });

    var reveal = gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            markers: false,
            toggleClass: 'active',
            start: 'top 0%',
            end: 'bottom 75%',
            scrub: true
        }
    });

    reveal.to(".main-hero-section .img-wrapper", {
        scale: 0.25
    })
} */