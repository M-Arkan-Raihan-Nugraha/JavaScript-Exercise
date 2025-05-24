const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const g = parseFloat(document.getElementById("gram").value);
  const output = document.getElementById("hasil");

  if (isNaN(g)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const kg = g / 1000;
  const ton = g / 1000000;
  const lb = g / 453.592;
  const oz = g / 28.3495;

  output.textContent = `${kg} Kilogram\n${ton} Ton\n${lb} Pound\n${oz} Ounce`;
})