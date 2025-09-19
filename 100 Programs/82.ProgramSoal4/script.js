const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const nama_barang = "Kertas";
  const jumlah_barang = 20;
  const harga = 1000000;
  const ketersediaan = true;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 4\n';
  hasil += garis + '\n\n';
  hasil += 'Nama Barang    : ' + nama_barang + '\n';
  hasil += 'Jumlah Barang  : ' + jumlah_barang + '\n';
  hasil += 'Harga Barang   : ' + harga + '\n';
  hasil += 'Ketersediaan   : ' + ketersediaan;

  document.getElementById("hasil").textContent = hasil;
});