const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const button = document.querySelector("button");

const num1 = document.getElementById("num1");
let value = document.querySelector("h2");

button.addEventListener("click", () => {
  const combination = temp1.value + temp2.value;
  const temp = parseFloat(num1.value); // Convertendo o valor de entrada para número

  if (combination == "CF") {
    value.innerText = (temp * 9) / 5 + 32;
  } else if (combination == "CK") {
    value.innerText = temp + 273.15; // Conversão de Celsius para Kelvin
  } else if (combination == "FC") {
    value.innerText = ((temp - 32) * 5) / 9;
  } else if (combination == "FK") {
    value.innerText = ((temp - 32) * 5) / 9 + 273.15;
  } else if (combination == "KC") {
    value.innerText = temp - 273.15;
  } else if (combination == "KF") {
    value.innerText = ((temp - 273.15) * 9) / 5 + 32;
  }
});
