const BtnGanti = document.getElementById("btn-ganti")

BtnGanti.addEventListener("click", function(){
  const teks = document.getElementById('teks').value;
  const simbol = document.getElementById('pengganti').value || '*'; // default jika kosong
  const hasil = teks.replace(/[aeiou]/gi, simbol);
  
  document.getElementById('hasil').textContent = hasil;  
})