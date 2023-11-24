document.addEventListener('DOMContentLoaded', function () {
    // Récupérer l'URL actuelle
    var currentURL = window.location.href;

    // Vérifier si l'URL contient "/tag"
    if (currentURL.includes('/tag')) {
        // Ajouter la classe "light-template" à l'élément avec la classe "body-container-wrapper"
        var bodyContainerWrapper = document.querySelector('.body-container-wrapper');
        if (bodyContainerWrapper) {
            bodyContainerWrapper.classList.add('light-template');
        }
    }
});
