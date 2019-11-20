console.info("EXO 21")

const form = document.querySelector("#formulaire");
const euro = document.querySelector("#euro");
const fch = document.querySelector("#fch");
const exchange = document.querySelector("#exchangeRate");
const error = document.querySelector("#formulaire p");

form.style.display = "flex";
// Exchange 1€ = xFCH
exchange.addEventListener("input", (e) => {
  if (exchange.value) {
    exchange.style.border = "1px solid #6e6e6e";
    error.style.display = "none";
  }
  return e.target.value = e.target.value;
});

// EURO => FCH
euro.addEventListener("input", (e) => {
  if (!exchange.value) {
    exchange.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    exchange.style.border = "1px solid #6e6e6e";
  }
  // toFixed(numberAfterComma) => permet de choisir combien de chiffre après la virgule
  const convertEuroFch = (e.target.value * exchange.value).toFixed(2); 
  fch.value = convertEuroFch;
});

// FCH => EURO
fch.addEventListener("input", (e) => {
  if (!exchange.value) {
    exchange.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    exchange.style.border = "1px solid #6e6e6e";
  }
  // toFixed(numberAfterComma) => permet de choisir combien de chiffre après la virgule
  const convertFchEuro = (e.target.value / exchange.value).toFixed(2); 
  euro.value = convertFchEuro;
});
