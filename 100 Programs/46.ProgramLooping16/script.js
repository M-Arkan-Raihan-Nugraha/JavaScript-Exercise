const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let hasil = "";
  let i = 0;

  while (i < 5) {
    let spasi = "";
    let s = 0;
    while (s < 5 - i - 1) {
      spasi += "&nbsp;";
      s++;
    }

    let bintang = "";
    let b = 0;
    while (b < i + 1) {
      bintang += "*";
      b++;
    }

    hasil += spasi + bintang + "<br>";
    i++;
  }

  i = 3;
  while (i >= 0) {
    let spasi = "";
    let s = 0;
    while (s < 5 - i - 1) {
      spasi += "&nbsp;";
      s++;
    }

    let bintang = "";
    let b = 0;
    while (b < i + 1) {
      bintang += "*";
      b++;
    }

    hasil += spasi + bintang + "<br>";
    i--;
  }

  document.getElementById("hasil").innerHTML = hasil;
});