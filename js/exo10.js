console.info("EXO 10")

// Créer un constructeur de cercle qui a pour propriétés :
// - "name" qui permettra de donner un nom à chaque cercle 
// - "rayon" en mètre qui sera définie à l'instanciation de chaque cercle
//   et qui sera définie à l'instanciation également de chaque cercle
// - "Pi" qui sera définie une seule fois (puisque c'est une constante - 3.14)
// - aire() qui affichera dans la console l'aire ( pi X rayon²)
// - instancier 2 cercles qui ont respectivement pour rayon : 2 et 4 mètres 
//   et pour nom petit_cercle et grand_cercle.

function Cercle(name, rayon, ) {
  this.name = name;
  this.rayon = rayon; // en mètres
  this.aire(); // Apelle de la méthode aire()
}

Cercle.prototype.pi = 3.14
Cercle.prototype.aire = function() {
  let aire = this.rayon * this.rayon * this.pi;
  console.log(`L'aire de ${ this.name } est de ${ aire } m².`);
}

// Instanciation des cercles.
const petitCercle = new Cercle("petit cercle", 2);
const grandCercle = new Cercle("grand cercle", 4);
