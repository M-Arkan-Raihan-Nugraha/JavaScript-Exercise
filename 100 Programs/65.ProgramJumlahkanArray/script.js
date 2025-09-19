const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const angka = [5, 10, 15, 20];
  const total = angka.reduce((sum, val) => sum + val, 0);

  document.getElementById('hasil').textContent = total;
})