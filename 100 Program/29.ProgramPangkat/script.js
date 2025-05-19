const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const angka = parseFloat(document.getElementById('angka').value);
  const pangkat = parseFloat(document.getElementById('pangkat').value);
  const hasil = Math.pow(angka, pangkat);
  document.getElementById('hasil').textContent = hasil;
})