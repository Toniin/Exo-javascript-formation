console.info("EXO 3")

// Fonctions anonymes immédiates ou IIFE (Immediately Invoked Function Expression)
// Les IIFE permettent d'isoler le code.

var i = 7; // variable globale

(function(){
  var i = 3; // variable locale
  console.log("Hello dans l'IIFES");
})();

console.log(window.i);
