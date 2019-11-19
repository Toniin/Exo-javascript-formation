console.info("EXO 17")

// Créer un élément p (paragraphe) dans le DOM
const p = document.createElement("p");
// Ajout du texte Hello world! dans p
p.textContent = "Ce texte est créé depuis Javascript";
// Ajout de l'élément p dans le DOM existant
document.body.appendChild(p);
// AJouter un attribut à p
p.setAttribute("id", "paragraphe-1");

console.log(p);
