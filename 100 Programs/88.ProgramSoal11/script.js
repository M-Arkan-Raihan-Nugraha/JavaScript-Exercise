const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const total = parseFloat(document.getElementById("total").value);

  if (isNaN(total)) {
    document.getElementById("hasil").textContent = "Masukkan angka total harga barang!";
    return;
  }

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 11\n';
  hasil += garis + '\n\n';

  if (total > 100000) {
    const diskon = total * 5 / 100;
    const totalBayar = total - diskon;
    hasil += `Hasil Dari Diskon: ${diskon}\n`;
    hasil += `Total Barang Yang Harus Dibayar: ${totalBayar}`;
  } else {
    hasil += `Total Barang Yang Harus Dibayar: ${total}`;
  }

  document.getElementById("hasil").textContent = hasil;
});