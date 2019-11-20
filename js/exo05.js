console.info("EXO 5")

// let permet de créer une variable ré-affectable
// Les variables ici ne sont pas "hissées" (!Hoisting)

// console.log(hoisting);
// let hoisting = 'hoisting';

// Les variables let et const:
// - ne sont plus dans l'objet window (variable globale)
// - sont block scope

// Function scope donc affiche functionScope
{
  // Ceci est un Block scope (ça fonctionne car c'est pas une Fonction scope)
  var functionScope = 'functionScope';
}
console.log(functionScope);

// Block scope donc 'not defined'
{
  // Ceci est un Block scope
  let blockScope = 'blockScope';
}
console.log(blockScope);

{
  var i = 5;
  let j = 12;
  console.log("valeur de i dans le bloc : " + i); // 5
  console.log("valeur de j dans le bloc : " + j); // 12
}
console.log("valeur de i dans le contexte d'exécution global : " + i); // 5
console.log("valeur de j dans le contexte d'exécution global : " + j); // Not defined
