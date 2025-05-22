const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const n = parseInt(document.getElementById('angka').value);
  if (isNaN(n) || n < 0) {
    document.getElementById('hasil').textContent = 'Masukkan angka bulat positif atau nol.';
    return;
  }

  let faktorial = 1;
  for (let i = 1; i <= n; i++) {
    faktorial *= i;
  }

  document.getElementById('hasil').textContent = `${n}! = ${faktorial}`;
    
});