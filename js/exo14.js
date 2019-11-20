// Tableau à index
console.info("EXO 14")

const tab1 = Array(); // fait appelle au constructeur Array()
const tab2 = [];

const fruits = ["Banane", "Orange"];
console.log(fruits);
// Affichage du premier élément
console.log("Le premier élément du tableau est", fruits[0]);
// Affichage de la taille du tableau
console.log("Le tableau a pour taille", fruits.length);
// Ajouter un élément à la fin du tableau (méthode push)
fruits.push("Kiwi");
console.log(fruits);
// Afficher l'index de Orange (méthode indexOf)
console.log("L'index de l'orange est", fruits.indexOf("Orange"));
// for... of => permet de parcourir un tableau
for (const fruit of fruits) {
  console.log("Fruit dans la boucle for... of:", fruit);
}
// Création d'un nouveau tableau d'après un tableau existant (méthode map)
const fruitsAuPluriel = fruits.map(fruit => fruit + "s");
console.log(fruitsAuPluriel);

// ------------------------------------------------------------------------------------------

// Tableau associatif = objet littéral
const bob = {
  value1: "Bob", // propriété: valeur,
  value2: 7,
  value3: true // dernière propriété sans virgule pour montrer que c'est la dernière.
};
