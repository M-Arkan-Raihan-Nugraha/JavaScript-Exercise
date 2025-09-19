const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let hasil = "";
  for (let i = 0; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      hasil += "*";
    }
    hasil += "<br>";
  }
  for (let i = 1; i <= 7; i++) {
    hasil += "*";
  }
  hasil += "<br>";
  for (let i = 4; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      hasil += "*";
    }
    hasil += "<br>";
  }
  document.getElementById("hasil").innerHTML = hasil;
});