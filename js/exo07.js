// Nouvelle syntaxe pour les fonctions
console.info("EXO 7")

// Possible utilisation de this
// !!! ATTENTION !!!
// this fait référence au parent original et non à son parent le plus proche

const add = (a, b) => {
  return a + b;
}

// Si une seule ligne d'exécution
// const add = (a, b) => a + b;

let somme = add(5, 9);
console.log(somme);

(() => {
  console.log('Arrow function anonyme');
  
})()