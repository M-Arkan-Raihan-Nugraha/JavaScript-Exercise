const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const teks = document.getElementById('kalimat').value.trim();
  const jumlah = teks === '' ? 0 : teks.split(/\s+/).length;

  document.getElementById('hasil').textContent = jumlah;
})