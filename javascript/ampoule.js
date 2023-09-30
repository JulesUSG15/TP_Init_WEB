// Fonction pour allumer ou éteindre l'ampoule
function OnOffAmpoule() {
    var ampoule = document.getElementById("ampoule");

    // Obtenez le nom de l'image actuelle
    var currentSrc = ampoule.getAttribute("src");

    // Vérifiez si l'ampoule est allumée ou éteinte
    if (currentSrc.search("pic_bulboff.gif") !== -1) {
        // Si elle est éteinte, allumez-la
        ampoule.setAttribute("src", "images/pic_bulbon.gif");
    } else {
        // Sinon, éteignez-la
        ampoule.setAttribute("src", "images/pic_bulboff.gif");
    }
}
