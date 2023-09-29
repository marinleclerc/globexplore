if ($(".navigation").length > 0) {
    // Sélectionnez l'élément avec l'ID "toggler-nav"
    var togglerNav = document.getElementById('toggler-nav');

    // Sélectionnez l'élément avec la classe "wrapper" dans votre header
    var wrapperElement = document.querySelector('header .wrapper');

    // Ajoutez un écouteur d'événement "clic" à l'élément "toggler-nav"
    togglerNav.addEventListener('click', function () {
        // Basculez la classe "active" sur l'élément "wrapper"
        if (wrapperElement) {
            wrapperElement.classList.toggle('active');
        }
    });
}