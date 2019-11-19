// Les classes
console.info("EXO 12")

// Créer une classe Personne qui attend en paramètres du constructeur: nom et prénom
// Cette classe a une méthode sePresenter() qui affiche dans la console:
// "Bonjour, je m'apelle Bob Marley"
// "Bonjour, je m'apelle Jules Dupont"

class Personne{
  // Constructeur
  constructor(firstname, lastname) {
    this.firstname = firstname,
    this.lastname = lastname

    // Appelle de la méthode sePresenter() 
    this.sePresenter(); 
  }

  // Les méthodes sont dans la classe mais pas dans le constructeur donc passage par référence
  sePresenter() {
    console.log(`Bonjour, je suis ${this.firstname} ${this.lastname}`);
  }
}

// Instanciation des Personnes
const bob = new Personne("Bob", "Marley");
const jules = new Personne("Jules", "Dupont");
// bob.sePresenter();
