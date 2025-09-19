const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let huruf = 'a';
  let i = 0;
  let hasil = '';

  while (i < 5) {
    let baris = '';
    let j = 0;
    while (j < 5) {
      baris += huruf + ' ';
      j++;
    }
  hasil += baris.trim() + '<br>';
  huruf = String.fromCharCode(huruf.charCodeAt(0) + 1);
  i++;
}
  document.getElementById("hasil").innerHTML = hasil;
});