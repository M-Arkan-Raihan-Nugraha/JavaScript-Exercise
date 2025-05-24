const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const m2 = parseFloat(document.getElementById("m2").value);
  const output = document.getElementById("hasil");

  if (isNaN(m2)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const km2 = m2 / 1_000_000;
  const ha = m2 / 10_000;
  const ft2 = m2 * 10.7639;
  const acre = m2 / 4046.86;

  output.textContent =
    `${km2} Kilometer Persegi\n` +
    `${ha} Hektar\n` +
    `${ft2} Kaki Persegi\n` +
    `${acre} Acre`;
});