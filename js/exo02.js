console.info("EXO 2")

// function nameFunction(params) {
//   console.log(params);
// }

function add(a, b) {
  // Bloc de code de la fonction
  var s = a + b;
  console.log('La variable s dans la fonction:', s);
  
  return s;
}

var somme = add(7, 3);
console.log(`La somme de (a)7 + (b)3 est ${somme}`);
