console.info("EXO 18")

const section = document.querySelector("section.exo-18");
const h3All = section.querySelectorAll("h3");
const pAll = section.querySelectorAll("p");

// Ajouter du css à section depuis le Javascript
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";
section.style.border = "1px solid black";

for (let i = 0; i < h3All.length; i++) {
  // Récupérer l'élément suivant de h4All[i] (p = paragraphe)
  const nextElem = h3All[i].nextElementSibling;
  
  h3All[i].setAttribute("id", `h3-${i + 1}`);
  
  h3All[i].addEventListener("mouseover", () => {
    h3All[i].style.cursor = "pointer";
  })

  // On vérifie si l'élément suivant est un paragraphe (P)
  if (nextElem.tagName == "P") {
    nextElem.setAttribute("id", `p-${i + 1}`);
    nextElem.style.display = "none";
    nextElem.style.color = "#2a2a2a";
  }

  // Si on clique sur le titre, le paragraphe s'affiche
  h3All[i].addEventListener("click", () => {
    if (nextElem.style.display == "none") {
      nextElem.style.display = "block";

      // Animate the display
      nextElem.animate([
        // keyframes
        { transform: 'translateX(-100vw)' },
        { transform: 'translateX(0px)' }
      ], { 
        // timing options
        duration: 2000
      });
    } else {
      nextElem.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(100vw)' }
      ], { 
        // timing options
        duration: 2000
      });

      setTimeout(() => {
        // Display none après l'animation
        nextElem.style.display = "none";
      }, 2000);
    };
  })
}

console.log("section :", section);
console.log("h4All :", h3All);
console.log("pAll :", pAll);
