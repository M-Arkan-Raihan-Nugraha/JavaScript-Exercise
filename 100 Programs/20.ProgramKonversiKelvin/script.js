const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const k = parseFloat(document.getElementById("kelvin").value);
  const c = k - 273.15;
  const f = 9/5 * (k-273.15) + 32;
  const r = 4/5 * (k-273.15);

  document.getElementById("celsius").textContent = c + ' Celsius';
  document.getElementById("fahrenheit").textContent = f + ' Fahrenheit';
  document.getElementById("reamur").textContent = r + ' Reamur';
})