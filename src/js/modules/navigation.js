if ($(".navigation").length > 0) {
    // Sélectionnez l'élément avec l'ID "toggler-nav"
    var togglerNav = document.getElementById('toggler-nav');

    // Sélectionnez l'élément avec la classe "wrapper" dans votre header
    var wrapperElement = document.querySelector('header .wrapper');

    var header = document.querySelector('header');

    // Ajoutez un écouteur d'événement "clic" à l'élément "toggler-nav"
    togglerNav.addEventListener('click', function () {
        // Basculez la classe "active" sur l'élément "wrapper"
        if (wrapperElement) {
            wrapperElement.classList.toggle('active');
        }
        // Basculez la classe "active" sur l'élément "wrapper"
        if (header) {
            header.classList.toggle('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var bodyContainerWrapper = document.querySelector('.body-container-wrapper');

    // Vérifier le défilement lorsqu'il y a une interaction de l'utilisateur
    window.addEventListener('scroll', function () {
        // Ajouter la classe "active" si le défilement est supérieur à 1 pixel, sinon la retirer
        if (window.scrollY > 1) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }

        // Vérifier si la classe "light-template" est présente
        var isLightTemplate = bodyContainerWrapper.classList.contains('light-template');

        // Changer la classe en "dark-template" ou revenir à "light-template" en fonction des conditions
        if (isLightTemplate && window.scrollY > 1) {
            bodyContainerWrapper.classList.replace('light-template', 'dark-template');
        } else if (!isLightTemplate && window.scrollY <= 1) {
            bodyContainerWrapper.classList.replace('dark-template', 'light-template');
        }
    });
});