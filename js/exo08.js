// Constructeur d'objet personne
console.info("EXO 8")

// METHODE != FONCTION => METHODE = fonction qui est propriété d'un objet et appelée depuis l'objet

// Les objets ont des propriétés (this.xxx = propriété)

// Ceci est un constructeur
function Personne(prenom, nom) {
  this.prenom = prenom; // this.nomVoulue = propriétéAttachée;
  this.nom = nom;
  this.espece = "humain";

  // Ceci est une méthode
  // Comportement incohérent de Javascript car c'est un système prototype et non de classe
  // Créer pour chaque instance, une mémoire de la méthode
  this.sePresenterEnMemoire = function() {
    console.log("Bonjour, je m'apelle", this.prenom, this.nom);
  };
}

// Pour résoudre le soucis, utilisation du prototype
// Créer un seul référenciel
Personne.prototype.sePresenterEnReference = function() {
  console.log("Hello", this.prenom, this.nom);
}

// Ici on trouve les instances
// Instanciation du constructeur Personne avec ses paramètres
const personne1 = new Personne("Bob", "Dylan");
const personne2 = new Personne("Fred", "Wesley");

personne1.sePresenterEnReference();
personne2.sePresenterEnReference();

console.log("Prénom:", personne1.prenom);
console.log("Nom:", personne1.nom);
console.log("C'est un", personne1.espece);

if (personne1.sePresenterEnMemoire === personne2.sePresenterEnMemoire) {
  console.group();
  console.info("=> Dans le constructeur (passage par valeur)");
  console.log('Ils sont de la même espèce. [chaque instance apelle la référence du prototype qui est une fonction.]');
  console.groupEnd();
} else {
  console.group();
  console.info("=> Dans le constructeur (passage par valeur)");
  console.warn('Ils ne sont pas de la même espèce. [chaque instance à sa fonction en mémoire.]');
  console.groupEnd();
}

if (personne1.sePresenterEnReference === personne2.sePresenterEnReference) {
  console.group();
  console.info("=> En dehors du constructeur (passage par référence)");
  console.log('Ils sont de la même espèce. [chaque instance apelle la référence du prototype qui est une fonction.]');
  console.groupEnd();
} else {
  console.group();
  console.info("=> En dehors du constructeur (passage par référence)");
  console.warn('Ils ne sont pas de la même espèce. [chaque instance à sa fonction en mémoire.]');
  console.groupEnd();
}