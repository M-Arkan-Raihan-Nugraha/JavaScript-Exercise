const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const km2 = parseFloat(document.getElementById("km2").value);
  const output = document.getElementById("hasil");

  if (isNaN(km2)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const m2 = km2 * 1_000_000;
  const ha = km2 * 100;
  const ft2 = km2 * 10763910.4;
  const acre = km2 * 247.105;

  output.textContent = `${m2} Meter Persegi\n${ha} Hektar\n${ft2} Kaki Persegi\n${acre} Acre`;
});