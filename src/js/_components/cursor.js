//Page cursors
if ($(".products").length > 0) {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var e = document.getElementById("cursor2");
    function n(t) {
        e.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".products .item"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
}

if ($(".main-hero-section-copy").length > 0) {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px"
    });
    var e = document.getElementById("targetButton");
    function n(t) {
        e.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".main-hero-section-copy .first-content"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

    // Sélectionnez l'élément avec la classe "first-content"
    const firstContent = document.querySelector('.first-content');

    // Sélectionnez l'élément avec l'ID "targetButton"
    const targetButton = document.getElementById('targetButton');

    // Récupérez la valeur du data-attribut "target"
    const dataTargetValue = targetButton.getAttribute('data-target');
    console.log('dataTargetValue:', dataTargetValue)

    // Sélectionnez l'élément avec l'ID "second-content"
    const secondContent = document.getElementById(dataTargetValue);

    firstContent.addEventListener('click', () => {
        const targetElement = secondContent;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Durée de l'animation en millisecondes (ajustez selon vos besoins)
        const startTime = performance.now();

        function step(currentTime) {
            const elapsedTime = currentTime - startTime;
            window.scrollTo(0, easeInOutCubic(elapsedTime, startPosition, distance, duration));
            if (elapsedTime < duration) {
                requestAnimationFrame(step);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            // Fonction d'interpolation pour ralentir le défilement (easeInOutCubic)
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t * t + b;
            t -= 2;
            return (c / 2) * (t * t * t + 2) + b;
        }

        requestAnimationFrame(step);
    });

}