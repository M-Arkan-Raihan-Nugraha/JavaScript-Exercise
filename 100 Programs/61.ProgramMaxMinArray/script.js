const BtnCari = document.getElementById("btn-cari")

BtnCari.addEventListener("click", function(){
  const data = [12, 45, 7, 89, 23];
  const maks = Math.max(...data);
  const min = Math.min(...data);

  document.getElementById('hasil').textContent = `Maksimum: ${maks}, Minimum: ${min}`;
})