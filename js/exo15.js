console.info("EXO 15")

// Boucle for
console.log("boucle for =>");
for (let i = 0; i < 10; i++) {
  console.log("i =", i);
}

// Boucle for... of => permet de parcourir chaque élément d'un tableau littéral
console.log("boucle for... for =>");
const fruits = ["Banane", "Kiwi", "Fraise"]
for (const fruit of fruits) {
  console.log("Fruit dans la boucle for... of:", fruit);
}

// Boucle for... in => permet de parcourir chaque élément d'un tableau associatif
console.log("boucle for... in =>");
const personne1 = { firstname: "Bob", lastname: "Dylan" }
for (key in personne1) {
  console.log("clé :", key);
  console.log("valeur de la clé :", personne1[key]);
}

// Condition if/else
console.log("condition if/else =>");
// Ajout d'un nombre aléatoire entre 0 et 10
const num = Math.round(Math.random() * 10);
if (num === 5) {
  console.log("La valeur", num, "est égale à 5"); 
} else if (num > 5) {
  console.log("La valeur", num, "est plus grande que 5"); 
} else {
  console.log("La valeur", num, "est plus petit que 5");
}
