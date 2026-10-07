
/* =========================================================
   TEXTE ANIMÉ AVEC TYPED.JS
========================================================= */

// On cherche l'élément qui doit recevoir le texte animé.
const multipleText = document.querySelector(".multiple-text");

// On vérifie que l'élément existe ET que Typed.js est chargé.
if (multipleText && typeof Typed !== "undefined") {

    const typed = new Typed(".multiple-text", {

        // Les textes qui seront affichés successivement.
        strings: [
            "Developpeur Front-end",
            "Developpeur Back-end",
            "Developpeur mobile"
        ],

        // Vitesse d'apparition des lettres.
        typeSpeed: 100,

        // Vitesse de suppression des lettres.
        backSpeed: 100,

        // Temps d'attente avant de supprimer le texte.
        backDelay: 1000,

        // Recommence l'animation automatiquement.
        loop: true
    });
}


/* =========================================================
   MENU BURGER
========================================================= */

// On récupère le bouton burger.
const menuBurger = document.querySelector("#menu-burger");

// On récupère la navigation.
const navbar = document.querySelector(".navbar");

// On vérifie que les deux éléments existent.
if (menuBurger && navbar) {

    // Détection du clic sur le bouton burger.
    menuBurger.addEventListener("click", () => {

        // Ajoute ou retire la classe "active".
        navbar.classList.toggle("active");

        // Transforme l'icône ☰ en ✕.
        menuBurger.classList.toggle("bx-x");
    });


    // Ferme le menu lorsqu'on clique sur un lien.
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            // Ferme le menu.
            navbar.classList.remove("active");

            // Remet l'icône burger.
            menuBurger.classList.remove("bx-x");

        });

    });
}
