const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const kg = parseFloat(document.getElementById("kg").value);
  const output = document.getElementById("hasil");

  if (isNaN(kg)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const g = kg * 1000;
  const t = kg / 1000;
  const lb = kg * 2.20462;
  const oz = kg * 35.274;

  output.textContent = `${g} Gram\n${t} Ton\n${lb} Pound\n${oz} Ounce`;
});