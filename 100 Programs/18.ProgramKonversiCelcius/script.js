const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const c = parseFloat(document.getElementById("celsius").value);
  const f = 9 / 5 * c + 32;
  const k = c + 273.15;
  const r = 4 / 5 * c;

  document.getElementById("fahrenheit").textContent = f + ' Fahrenheit';
  document.getElementById("kelvin").textContent = k + ' Kelvin';
  document.getElementById("reamur").textContent = r + ' Reamur';
})