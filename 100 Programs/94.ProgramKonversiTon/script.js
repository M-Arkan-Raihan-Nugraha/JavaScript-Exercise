const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const t = parseFloat(document.getElementById("ton").value);
  const output = document.getElementById("hasil");

  if (isNaN(t)) {
    output.textContent = "Masukkan angka yang valid!";
    return;
  }

  const g = t * 1000000;
  const kg = t * 1000;
  const lb = t * 2204.62;
  const oz = t * 35274;

  output.textContent = `${g} Gram\n${kg} Kilogram\n${lb} Pound\n${oz} Ounce`;
});