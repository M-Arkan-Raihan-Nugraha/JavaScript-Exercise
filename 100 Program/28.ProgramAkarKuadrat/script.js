const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const angka = parseFloat(document.getElementById('angka').value);
  const hasil = Math.sqrt(angka);
  document.getElementById('hasil').textContent = hasil;
})