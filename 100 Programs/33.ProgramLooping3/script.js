const BtnLoop = document.getElementById("btn-loop")
let abjad = ["A. ","B. ","C. ","D. "]

BtnLoop.addEventListener("click", function(){
  const kata = document.getElementById('kata').value;
  let hasil = "";

  for (let i = 0; i < 4; i++) {
    hasil += abjad[i] + kata + "<br>";
  }

  document.getElementById("hasil").innerHTML = hasil;
})