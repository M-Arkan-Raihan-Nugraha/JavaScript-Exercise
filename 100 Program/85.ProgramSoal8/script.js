const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const r = parseFloat(document.getElementById("jari").value);
  const t = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(r) || r <= 0 || isNaN(t) || t <= 0) {
    document.getElementById("output").textContent = "Masukkan jari-jari dan tinggi yang valid!";
    return;
  }

  const phi = 3.14;
  const volume = phi * r * r * t;
  const luasPermukaan = 2 * phi * r * r + 2 * phi * r * t;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM TABUNG\n';
  hasil += garis + '\n\n';
  hasil += 'Volume : ' + volume.toFixed(2) + ' cm<sup>3\n';
  hasil += 'Luas Permukaan : ' + luasPermukaan.toFixed(2) + ' cm<sup>2';

  document.getElementById("hasil").innerHTML = hasil;
});