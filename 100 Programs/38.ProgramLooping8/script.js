const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let i = 2;
  let total = 0;
  let hasil = "";

  while (i <= 10) {
    hasil += i;
    total += i;

  if (i < 10) {
    hasil += " + ";
  }
  else {
    hasil += " = ";
  }

  i += 2;
  }

  hasil += total;

  document.getElementById("hasil").innerHTML = hasil;
});