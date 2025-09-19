const BtnBulatkan = document.getElementById("btn-bulatkan")

BtnBulatkan.addEventListener("click", function(){
  const angka = parseFloat(document.getElementById('angka').value);
  const hasil = Math.round(angka);
  document.getElementById('hasil').textContent = hasil;
})