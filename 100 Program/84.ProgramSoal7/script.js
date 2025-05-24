const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(24);
  const r = parseFloat(document.getElementById("jari").value);

  if (isNaN(r) || r <= 0) {
    document.getElementById("output").textContent = "Masukkan jari-jari yang valid!";
    return;
  }

  const phi = 3.14;
  const luas = phi * r * r;
  const keliling = 2 * phi * r;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM LINGKARAN\n';
  hasil += garis + '\n\n';
  hasil += 'Luas     : ' + luas.toFixed(2) + ' cm<sup>2</sup> \n';
  hasil += 'Keliling : ' + keliling.toFixed(2) + ' cm';

  document.getElementById("hasil").innerHTML = hasil;
});