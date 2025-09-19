const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const angka1 = 87.77;
  const angka2 = 66.50;
  const angka3 = 97.5;

  const jumlah = angka1 + angka2 + angka3;
  const rataRata = (angka1 + angka2 + angka3) / 3;

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 5 & 6\n';
  hasil += garis + '\n\n';
  hasil += 'Jumlah: ' + jumlah.toFixed(2) + '\n';
  hasil += 'Rata-rata: ' + rataRata.toFixed(2);

  document.getElementById("hasil").textContent = hasil;
});