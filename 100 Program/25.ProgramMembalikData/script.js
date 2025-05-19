const BtnBalik = document.getElementById("btn-balik")

BtnBalik.addEventListener("click", function(){
  const teks = document.getElementById('data').value;
  const hasil = teks.split('').reverse().join('');
  document.getElementById('hasil').textContent = hasil;
})