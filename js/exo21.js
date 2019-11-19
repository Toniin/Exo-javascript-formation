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
  const convertEuroFch = Math.round(e.target.value * exchange.value * 100) / 100; 
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
  const convertFchEuro = Math.round(e.target.value / exchange.value * 100) / 100; 
  euro.value = convertFchEuro;
});
