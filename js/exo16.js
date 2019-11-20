console.info("EXO 16")

// Synchrone
console.log("Synchrone =>");
console.log("avant");
console.log("après");

// Asynchrone
// On appelle pas la fonction dans l'asynchrone, on y fait juste référence (nomDeLaFonction sans les parenthèses)
// setTimeout(nameFunction, 1000); => Asynchrone
// setTimeout(nameFunction(), 1000); => Devient synchone car on appelle la fonction. NE PAS FAIRE ÇA !!!
console.log("Asynchrone =>");
setTimeout(() => console.log("avant (asynchrone de 1sec)"), 1000);
console.log("après");
