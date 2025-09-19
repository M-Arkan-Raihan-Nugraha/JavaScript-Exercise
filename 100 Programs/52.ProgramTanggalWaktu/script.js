const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const hasil = new Date();
  document.getElementById("hasil").innerHTML = hasil.toLocaleString();
});