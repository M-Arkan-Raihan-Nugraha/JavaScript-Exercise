const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const teks = document.getElementById('kalimat').value.toLowerCase();
  const vokal = teks.match(/[aeiou]/g);
  
  document.getElementById('hasil').textContent = vokal ? vokal.length : 0;
})