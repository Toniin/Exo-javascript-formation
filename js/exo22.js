console.info("EXO 22")

const slideshow = document.querySelector("#slideshow-exo22");
slideshow.style.display = "block";

class ManageImages {
  constructor() {
    // On stock l'élément slideshow
    this.ss_container = slideshow;
    // On stock le tableau d'images
    this.images = [];
    // Appelle asynchrône de la méthode fetchImages qui renvoit une promesse
    this.fetchImages(this.createImages);
  }

  fetchImages = (success) => {
    fetch("https://picsum.photos/v2/list?page=2&limit=5")
    .then((response) => {
      if (response.status !== 200) {
        console.log("Erreur - statut : " + response.status);
        // return; (permet de quitter directement pour partir dans le catch des erreurs)
        return;
      }
      // json() est une promesse qui vérifie que response est en JSON
      response.json()
      .then((data) => {
        this.images = data;
        // Retourne un tableau dans la console de ses éléments
        console.table(this.images);
        // On appelle la callback success() qui est notre paramètre pour appeler ensuite la fonction createImages
        success();
      })
    })
    .catch((error) => { console.log("Erreur :", error); })
  }

  // On créé pour chaque image du tableau, une image dans le DOM
  // ATTENTION "ARROW FUNCTION" CAR "THIS" CORRESPOND À L'INSTANCE EST NON À createImages
  createImages = () => {
    // Parcourir le tableau d'images
    for (let i = 0; i < this.images.length; i++) {
      // On créé une balise img
      const img = document.createElement("img");
      // // On donne la source de l'image à la balise img
      img.setAttribute("src", this.images[i].download_url);
      // // On lui donne une alternative
      img.setAttribute("alt", "");
      // // On le place dans le DOM (il sera fils de l'élément this.ss_container = section slideshow-exo22)
      this.ss_container.appendChild(img);
    }
  }
  
}

// Instance du gestionnaire d'images
const mI = new ManageImages();
