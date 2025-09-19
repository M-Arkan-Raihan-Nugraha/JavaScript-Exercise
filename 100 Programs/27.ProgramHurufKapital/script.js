const BtnUbah = document.getElementById("btn-ubah")

BtnUbah.addEventListener("click", function(){
  const Teks = document.getElementById('teks').value;
  document.getElementById('hasil').textContent = Teks.toUpperCase();
})