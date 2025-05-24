const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const n = document.getElementById('angka').value;
  const digit = n.split('');
  const jumlah = digit.reduce((sum, d) => sum + Math.pow(parseInt(d), digit.length), 0);
  document.getElementById('hasil').textContent = 
  parseInt(n) === jumlah ? `${n} ADALAH BILANGAN ARMSTRONG` : `${n} BUKAN BILANGAN ARMSTRONG`;  
})