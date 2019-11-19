console.info("EXO 6")

// const permet de créer une variable non ré-affectable
// Les variables ici ne sont pas "hissées" (!Hoisting)

// console.log(hoisting);
// let hoisting = 'hoisting';

// Les variables let et const:
// - ne sont plus dans l'objet window (variable globale)
// - sont block scope

{
  const constante = { name: "Dylan" };
  console.log("Nom d'origine:", constante.name);
  
  constante.name = "Jackson";
  console.log("Ré-affectation du nom:", constante.name); // Ré-affectation de la propriété dans une constante
  
  constante = {name: "Clinton"}; // Pas possible de ré-affecter une constante
}

