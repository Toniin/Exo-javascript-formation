// L'héritage
console.info("EXO 13")

class Personne {
  constructor(nom,prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  // Méthodes
  sePresenter() {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom);
  }
}

// Cette classe est une extension de Personne (Enseignant hérite de Personne)
class Enseignant extends Personne {
  constructor(nom, prenom,diplome) {
    super(nom, prenom);
    this.diplome = diplome;
  }

  // Méthodes
  enseigner() {
    console.log("J'enseigne !");
  }
}

var jean = new Enseignant("Dujardin","Jean","Agrégation");
jean.sePresenter();
jean.enseigner();