// Codice per il menu a comparsa
document.getElementById('menuButton').addEventListener('click', function() {
    var nav = document.getElementById('navMenu');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});

// Codice per la galleria di immagini
function cambiaImmagine(percorsoImmagine) {
    document.getElementById('immaginePrincipale').src = percorsoImmagine;
}
