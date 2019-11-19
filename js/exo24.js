console.log("EXO 24");

jQuery(($) => {
  $("#jquery-exo24").show();

  // Fonction qui se lance après 3 secondes (quand le paragraphe caché entièrement)
  $("#jquery-exo24-hide").hide(3000, () => {
    console.log("Je viens de disparaître du DOM pour apparaître dans la console...");
  });

  // Quand on clique sur un titre "h2", il affiche dans la console son propre élément du DOM
  $("#jquery-exo24>h2").each((index, elem) => {
    $(elem).on("click", () => {
      $(elem).next("p").toggle(1000, () => console.log(`[${index + 1}] =>`, elem))
    });
  })
})