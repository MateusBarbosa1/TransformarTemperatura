const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const button = document.querySelector("button");

const formulaCF = document.getElementById("formulaCF");
const formulaCK = document.getElementById("formulaCK");

const main = document.querySelector("main");

const num1 = document.getElementById("num1");
let value = document.querySelector("h2");

button.addEventListener("click", () => {
  const combination = temp1.value + temp2.value;
  const temp = parseFloat(num1.value); // Convertendo o valor de entrada para número

  if (combination == "CF") {
    value.innerText = (temp * 9) / 5 + 32;
    main.innerHTML = `<formula id="formulaCF" style="display: flex">
    <p>C° <br />__ <br />5</p>
    <p style="padding: 0 20px; font-weight: bold"><br />=</p>
    <p>F° - 32 <br />_______ <br /><t style="padding-left: 22px">9</t></p>
  </formula>`;
  } else if (combination == "CK") {
    value.innerText = temp + 273.15; // Conversão de Celsius para Kelvin
    main.innerHTML = `<formula id="formulaCK" style="display: flex">
    <p>C° <br />__ <br />5</p>
    <p style="padding: 0 20px; font-weight: bold"><br />=</p>
    <p>K° - 273 <br />_______ <br /><t style="padding-left: 22px">5</t></p>

    <h3 style="padding: 20px 10px">ou</h3>
    <p style="padding-top: 20px">C° + 273</p>
  </formula>`;
  } else if (combination == "FC") {
    value.innerText = ((temp - 32) * 5) / 9;
    main.innerHTML = `<formula id="formulaCF" style="display: flex">
    <p>F° - 32 <br />_______ <br /><t style="padding-left: 22px">9</t></p>

    <p style="padding: 0 20px; font-weight: bold"><br />=</p>
    <p>C° <br />__ <br />5</p>
  </formula>`;
  } else if (combination == "FK") {
    value.innerText = ((temp - 32) * 5) / 9 + 273.15;
  } else if (combination == "KC") {
    value.innerText = temp - 273.15;
  } else if (combination == "KF") {
    value.innerText = ((temp - 273.15) * 9) / 5 + 32;
  }
});
