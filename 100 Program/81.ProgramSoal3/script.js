const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  let garis = '='.repeat(20);
  let QTY = 23;
  let harga_sepatu = 45000;
  let h = QTY * harga_sepatu;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 3\n';
  hasil += garis + '\n';
  hasil += 'Hasil: ' + h;

  document.getElementById("hasil").textContent = hasil;
});