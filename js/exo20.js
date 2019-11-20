console.info("EXO 20")

// On attend que la page soit chargée
window.onload = () => {
  const slideshow = document.querySelector("#slideshow");
  slideshow.style.display = "block";
  // Création de la classe Slideshow
  class Slideshow {
    constructor(ss_id) {
      // Élément parent du slideshow
      this.ss_container = document.getElementById(ss_id);
      // Images du slideshow
      this.images = [
        { "src": "../img/img1.jpg" },
        { "src": "../img/img2.jpg" },
        { "src": "../img/img3.jpg" }
      ];

      // Cette propriété permet de stoper l'animation pour quel clear le setTimeout
      this.slideOff;
      // On crée une propriété qui lance ou arrête l'animation du slide
      this.isSlideAnimate = false;
      // On appelle pour chaque instance, la méthode createImages()
      this.createImages();
      // On appelle la méthode qui stop le slide
      this.stopSlideAnimation();
    }

    // On créé pour chaque image du tableau, une image dans le DOM
    createImages() {
      // Parcourir le tableau d'images
      for (let i = 0; i < this.images.length; i++) {
        // On créé une balise img
        const img = document.createElement("img");
        // On donne la source de l'image à la balise img
        img.setAttribute("src", this.images[i].src);
        // On lui donne une alternative
        img.setAttribute("alt", "");
        // On le place dans le DOM (il sera fils de l'élément this.ss_container = section slideshow)
        this.ss_container.appendChild(img);
      }
    }

    // On créé un évément qui stop le slide au clique
    stopSlideAnimation() {
      // Ajouter l'événement onclick au container pour lancer/stopper l'animation
      this.ss_container.onclick = () => {       
        if (this.isSlideAnimate) {
          this.isSlideAnimate = false;
          console.log("On stop l'animation.");
          window.clearTimeout(this.slideOff);
        } else {
          console.log("On lance l'animation.");
          this.isSlideAnimate = true;
          this.slide();
        }
      }
    }

    // On switch d'images en plaçant la première en dernier
    slide() {
      if (this.isSlideAnimate) {
        this.slideOff = setTimeout(() => {
          // On récupère le premier élément img su slideshow
          const first_image = document.querySelector("section#slideshow > img");
          // On place la première image en dernier
          this.ss_container.appendChild(first_image)
          // Appelle récursif !!! À NE PAS FAIRE !!!
          this.slide();
        }, 1000);
      }
    }
  }

  // Instanciation du slideshow
  const ss1 = new Slideshow("slideshow");
}