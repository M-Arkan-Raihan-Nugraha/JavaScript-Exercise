const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let hasil = "";
  
  for (let i = 0; i < 5; i++) {
  let spasi = "";
  for (let s = 0; s < 5 - i - 1; s++) {
    spasi += "&nbsp;";
    }
    
  let bintang = "";
  for (let b = 0; b < i + 1; b++) {
    bintang += "*";
  }
    hasil += spasi + bintang + "<br>";
  }
  document.getElementById("hasil").innerHTML = hasil;
});