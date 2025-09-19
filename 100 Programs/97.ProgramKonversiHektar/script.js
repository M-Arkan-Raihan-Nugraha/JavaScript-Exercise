const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const ha = parseFloat(document.getElementById("ha").value);
  const output = document.getElementById("hasil");

  if (isNaN(ha)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const m2 = ha * 10000;
  const km2 = ha / 100;
  const ft2 = ha * 107639;
  const acre = ha * 2.47105;

  output.textContent =
    `${m2} Meter Persegi\n` +
    `${km2} Kilometer Persegi\n` +
    `${ft2} Kaki Persegi\n` +
    `${acre} Acre`;
});