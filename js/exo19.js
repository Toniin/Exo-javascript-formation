console.info("EXO 19")

// Attendre que la fenêtre soit chargée
window.onload = () => {
  // On récupère la section de l'exo 19, les titres h3, les paragraphes p
  const section = document.querySelector("section.exo-19");
  const h3All = section.querySelectorAll("h3");
  const pAll = section.querySelectorAll("p");

  // Ajouter du css à la section depuis le Javascript
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.alignItems = "center";
  section.style.border = "1px solid black";

  // On agit sur tous les titres h3
  for (let i = 0; i < h3All.length; i++) {
    // Au survole des titres, on modifie le curseur
    h3All[i].addEventListener("mouseover", () => {
      h3All[i].style.cursor = "pointer";
    })

    // Quand on clique sur le titre h3
    h3All[i].onclick = function() {
      this.nextElementSibling.classList.toggle("color-red");
    }
  };
};