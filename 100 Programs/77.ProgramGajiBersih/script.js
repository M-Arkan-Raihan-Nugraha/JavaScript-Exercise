const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const gaji = parseFloat(document.getElementById('gaji').value);
  const pajak = parseFloat(document.getElementById('pajak').value);
  const bersih = gaji - (gaji * pajak / 100);
  
  document.getElementById('hasil').textContent = 'Rp ' + bersih.toFixed(2);
})