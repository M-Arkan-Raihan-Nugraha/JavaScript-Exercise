const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let hasil = "";
  for (let i = 0; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      hasil += "*";
    }
    hasil += "<br>";
  }
  document.getElementById("hasil").innerHTML = hasil;
});