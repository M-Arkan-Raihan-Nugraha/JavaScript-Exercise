const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const kpj = parseFloat(document.getElementById("kpj").value);
  const output = document.getElementById("hasil");

  if (isNaN(kpj)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const ms = kpj / 3.6;
  const mph = kpj * 0.621371;
  const fts = kpj * 0.911344;
  const kt = kpj * 0.539957;

  output.textContent =
    `${ms.toFixed(2)} Meter/Detik\n` +
    `${mph.toFixed(2)} Meter/Jam\n` +
    `${fts.toFixed(2)} Kaki/Detik\n` +
    `${kt.toFixed(2)} Knot`;
});