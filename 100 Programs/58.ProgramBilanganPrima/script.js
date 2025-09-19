const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const n = parseInt(document.getElementById('angka').value);
  if (n < 2) {
    document.getElementById('hasil').textContent = `${n} BUKAN BILANGAN PRIMA`;
    return;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      document.getElementById('hasil').textContent = `${n} BUKAN BILANGAN PRIMA`;
      return;
    }
  }

  document.getElementById('hasil').textContent = `${n} ADALAH BILANGAN PRIMA`;
})