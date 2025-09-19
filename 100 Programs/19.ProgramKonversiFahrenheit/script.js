const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const f = parseFloat(document.getElementById("fahrenheit").value);
  const c = 5/9 * (f-32);
  const k = 5/9 * (f-32) + 273.15;
  const r = 4/9 * (f-32);
  
  document.getElementById("celsius").textContent = c + ' Celsius';
  document.getElementById("kelvin").textContent = k + ' Kelvin';
  document.getElementById("reamur").textContent = r + ' Reamur';
})