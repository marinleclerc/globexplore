import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// Sélectionnez tous les éléments de classe "date-picker"
var datePickers = document.querySelectorAll('.date-picker');

// Parcourez chaque élément "date-picker"
datePickers.forEach(function (datePicker) {
    // Ajoutez un écouteur d'événement "clic"
    datePicker.addEventListener('click', function () {
        // Supprimez la classe "active" de tous les éléments de classe "date-picker"
        datePickers.forEach(function (dp) {
            dp.classList.remove('active');
        });

        // Récupérez la valeur de l'attribut "data-index"
        var dataIndex = datePicker.getAttribute('data-index');

        // Supprimez la classe "active" de tous les éléments de classe "content"
        var contentElements = document.querySelectorAll('.content');
        contentElements.forEach(function (contentElement) {
            contentElement.classList.remove('active');
        });

        // Ajoutez la classe "active" à l'élément "content" correspondant
        var targetContent = document.querySelector('[data-toggler="' + dataIndex + '"]');
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Ajoutez la classe "active" à l'élément "date-picker" cliqué
        datePicker.classList.add('active');
    });

    // Sélectionnez tous les éléments de classe "content"
    var contentElements = document.querySelectorAll('.content');

    // Initialisez la variable pour la hauteur maximale
    var maxHeight = 0;

    // Parcourez tous les éléments de classe "content"
    contentElements.forEach(function (contentElement) {
        // Obtenez la hauteur de l'élément
        var elementHeight = contentElement.clientHeight;

        // Mettez à jour la hauteur maximale si nécessaire
        if (elementHeight > maxHeight) {
            maxHeight = elementHeight;
        }
    });

    // Sélectionnez la div de classe "contents"
    var contentsDiv = document.querySelector('.contents');

    // Appliquez la hauteur maximale à la div "contents"
    if (contentsDiv) {
        contentsDiv.style.height = maxHeight + 'px';
    }

    if ($(window).width() < 768) {
        // Sélectionnez la div de classe "swiper-wrapper"
        var swiperWrapper = document.querySelector('.timeline .swiper-wrapper');

        // Fonction pour calculer la largeur totale des éléments "date-picker"
        function getTotalDatePickerWidth() {
            var totalWidth = 0;
            datePickers.forEach(function (datePicker) {
                totalWidth += datePicker.offsetWidth;
            });
            return totalWidth;
        }

        // Fonction pour initialiser Swiper.js
        function initSwiper() {
            var mySwiper = new Swiper('.timeline .swiper-container', {
                // Configuration de Swiper
                spaceBetween: 30,
                slidesPerView: "auto",
                navigation: {
                    nextEl: '.timeline .controller.next', // Sélecteur de l'élément suivant
                    prevEl: '.timeline .controller.previous', // Sélecteur de l'élément précédent
                },
                slidesOffsetAfter: 300,
                on: {
                    slideChange: function () {
                        // Mettez à jour la classe "active" des éléments de contenu en fonction de la diapositive actuelle
                        var currentSlideIndex = mySwiper.activeIndex;
                        var contentElements = document.querySelectorAll('.content');
                        contentElements.forEach(function (contentElement, index) {
                            contentElement.classList.remove('active');
                            if (index === currentSlideIndex) {
                                contentElement.classList.add('active');
                            }
                        });
                    },
                },
            });
        }

        // Vérifiez si les éléments "date-picker" dépassent la largeur de la div "swiper-wrapper"
        if (swiperWrapper) {
            var totalDatePickerWidth = getTotalDatePickerWidth();
            var swiperWrapperWidth = swiperWrapper.offsetWidth;

            if (totalDatePickerWidth > swiperWrapperWidth) {
                // Initialiser Swiper.js si les éléments "date-picker" dépassent la largeur
                initSwiper();
            }

            var totalDatePickerWidth = getTotalDatePickerWidth();
            var swiperWrapperWidth = swiperWrapper.offsetWidth;
        }

    }

});
