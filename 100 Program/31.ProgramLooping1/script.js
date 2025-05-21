const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  const kata = document.getElementById('kata').value;
  let hasil = "";

  for (let i = 0; i < 4; i++) {
    hasil += kata + " ";
  }

  document.getElementById("hasil").innerHTML = hasil;
})