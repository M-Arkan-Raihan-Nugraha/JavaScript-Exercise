const BtnLempar = document.getElementById("btn-lempar")

BtnLempar.addEventListener("click", function(){
  const hasil = Math.floor(Math.random() * 6) + 1;
  document.getElementById("hasil").innerHTML = hasil;
});