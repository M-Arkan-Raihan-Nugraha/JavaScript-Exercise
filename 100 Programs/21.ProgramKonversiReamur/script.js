const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const r = parseFloat(document.getElementById("reamur").value);
  const c = 5/4 * r;
  const f = 9/4 * r + 32;
  const k = 5/4 * r + 273.15;

  document.getElementById("celsius").textContent = c + ' Celsius';
  document.getElementById("fahrenheit").textContent = f + ' Fahrenheit';
  document.getElementById("kelvin").textContent = k + ' Kelvin';
})

