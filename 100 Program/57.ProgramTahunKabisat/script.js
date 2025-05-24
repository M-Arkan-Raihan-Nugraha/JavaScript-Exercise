const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const tahun = parseInt(document.getElementById('tahun').value);
  const kabisat = (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
  document.getElementById('hasil').textContent = kabisat ? `${tahun} ADALAH TAHUN KABISAT` : `${tahun} BUKAN TAHUN KABISAT`;
})