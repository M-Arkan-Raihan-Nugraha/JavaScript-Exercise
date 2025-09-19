const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const b1 = parseInt(document.getElementById("b1").value);
  const b2 = parseInt(document.getElementById("b2").value);
  const b3 = parseInt(document.getElementById("b3").value);

  if (isNaN(b1) || isNaN(b2) || isNaN(b3)) {
    document.getElementById("hasil").textContent = "Semua jumlah barang harus diisi dengan angka!";
    return;
  }

  const total = b1 + b2 + b3;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 10\n';
  hasil += garis + '\n\n';
  hasil += `Jumlah Total Semua Barang: ${total}`;

  document.getElementById("hasil").textContent = hasil;
});