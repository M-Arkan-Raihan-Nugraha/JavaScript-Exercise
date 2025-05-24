const BtnPotong = document.getElementById("btn-potong")

BtnPotong.addEventListener("click", function(){
  const teks = document.getElementById('teks').value;
  const max = parseInt(document.getElementById('panjang').value);
  const hasil = teks.length > max ? teks.substring(0, max) + '...' : teks;
  
  document.getElementById('hasil').textContent = hasil;
})