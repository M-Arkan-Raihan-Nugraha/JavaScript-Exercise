const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  let width = 42;
  let bintang = '*'.repeat(width);

  function centerText(text) {
    let totalSpace = width - text.length;
    let spaceLeft = Math.floor(totalSpace / 2);
    let spaceRight = totalSpace - spaceLeft;
    return ' '.repeat(spaceLeft) + text + ' '.repeat(spaceRight);
  }

  let hasil = "";
  hasil += bintang + '\n';
  hasil += centerText("PROGRAM JAVASCRIPT") + '\n';
  hasil += centerText("OLEH: M ARKAN RAIHAN NUGRAHA") + '\n';
  hasil += centerText("KELAS: X PPLG 2") + '\n';
  hasil += bintang;

  document.getElementById("hasil").textContent = hasil;
});