console.log("EXO 23");

// Tester si la librairie jQuery est accesible depuis le html
console.log("On test jQuery =>", jQuery());

// jQuery est une IIFE qui permet: 
// - d'isoler le code
// - d'attendre que le DOM soit chargé
// - d'apeller la méthode jQuery grâce à l'alias "$"

jQuery(($) => {
  console.log("Houra, je suis dans jQuery !!!");

  $("#jquery-exo23").show()

// RÉCUPÉRATION D'ÉLÉMENT DU DOM GRÂCE AUX SÉLÉCTEURS CSS
  // $(param1)
  // Le premier paramètre "param1" => Une chaîne de caractères qui respecte la syntaxe des sélecteurs CSS

  // On récupère le titre "h2" avec l'id "jquery-title"
  const h2 = $("#jquery-exo23-title")
  // On récupère le bouton avec l'id "jquery-btn"
  const btn = $("#jquery-exo23-btn")
  // Affiche le bouton "#jquery-btn" dans la console
  console.log("Bouton :", btn);
  
// UTILISATION DES MÉTHODES DE JQUERY POUR AGIR SUR LE DOM
  // L'élément du DOM est dopé aux stéroïdes de jQuery
  // On peut alors lui attribuer tous les prototypes de l'objet jQuery

  // On cache le titre "h2" puis le réaffiche à chaque clique sur le bouton "#jquery-btn"
  // slow permet de cacher/afficher avec un effet slow (lent)
  btn.on("click", () => h2.toggle('slow'));

// CRÉATION D'ÉLÉMENT HTML DEPUIS JQUERY GRÂCE AUX BALISES HTML
  // On créé un élément HTML avec jQuery
  // puis on le place dans le DOM dans la section "#jquery"
  const p = $("<p></p>", {
    text: "Salut, je suis un paragraphe créé avec jQuery.",
    id:"jquery-exo23-paragraphe"
  }).appendTo("#jquery-exo23")
})