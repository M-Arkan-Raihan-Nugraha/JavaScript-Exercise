const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let total = 0;
  let hasil = "";

  for (let i = 1; i < 6; i += 2) {
    hasil += i;
    total += i;

    if (i < 5) {
      hasil += " + ";
      }
      else {
      hasil += " = ";
      }
  }

    hasil += total;

  document.getElementById("hasil").innerHTML = hasil;
});