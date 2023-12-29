if ($(".navigation").length > 0) {

        // Sélectionne tous les liens dans la navigation
        const navLinks = document.querySelectorAll('header nav a');
    
        // Boucle à travers chaque lien
        navLinks.forEach(link => {
            // Vérifie si l'URL du lien est présente dans l'URL active
            if (window.location.href.includes(link.href)) {
                // Ajoute la classe 'active' au lien
                link.classList.add('active');
            }
        });
    


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

    // Récupérez l'URL actuelle
    var currentUrl = window.location.href;

    // Récupérez tous les éléments avec la classe "nav-item"
    var navItems = document.querySelectorAll('.nav-item');

    // Parcourez les éléments et comparez les parties pertinentes des URLs
    navItems.forEach(function(navItem) {
        var link = navItem.querySelector('a');

        // Ajoutez une vérification pour s'assurer que link n'est pas null
        if (link && link.href) {
            var linkUrl = link.href;

            if (currentUrl.indexOf(linkUrl) !== -1 || linkUrl.indexOf(currentUrl) !== -1) {
                // Si les parties pertinentes des URLs correspondent, ajoutez la classe "active"
                navItem.classList.add('active');
            }
        }
    });

    // Récupérez l'URL actuelle
    var currentUrl = window.location.href;
    console.log('currentUrl:', currentUrl)

    // Testez si l'URL contient les mots "accueil" ou "home" (insensible à la casse)
    if (currentUrl.toLowerCase().includes("accueil") || currentUrl.toLowerCase().includes("home") || currentUrl == "https://www.perlesdesaveurs.com/") {
        header.classList.add('home');
    } else {
        console.log("L'URL ne contient pas 'accueil' ou 'home'.");
    }


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