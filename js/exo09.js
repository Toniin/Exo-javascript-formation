console.info("EXO 9")

// Passage par valeur
// Pour tous les TYPES PRIMITIFS
// Va dans la mémoire de chaque variable

// j est un clone de i
let i = 1;
let j = i;
console.log("i", i);
console.log("j", j);

i = 2;
console.log("i (après ré-affectation de i)", i);
console.log("j (après ré-affectation de i)", j);

// ----------------------------------------------------------------------------- //

// Passage par référence
// Pour ce qui est AUTRES QUE DES TYPES PRIMITIFS
// Va chercher dans directement dans le référenciel

// Ici, b est strictement égale à a
// b ne créé par un clone de a
let a = {
  name: "Bob",
};
let b = a;
console.log("a", a);
console.log("b", b);

a.name = "Dylan";
console.log("a (après ré-affectation de a)", a);
console.log("b (après ré-affectation de b)", b);