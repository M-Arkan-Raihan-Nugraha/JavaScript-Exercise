const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const teks = document.getElementById('teks').value;
  const hurufBesar = teks.match(/[A-Z]/g);
  
  document.getElementById('hasil').textContent = hurufBesar ? hurufBesar.length : 0;
})