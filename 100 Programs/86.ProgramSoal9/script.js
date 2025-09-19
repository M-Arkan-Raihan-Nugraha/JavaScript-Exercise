const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = '='.repeat(20);
  const k = document.getElementById("kelompok").value.trim();
  const ad = document.getElementById("asal").value.trim();
  const jt = document.getElementById("jumlah").value.trim();

  if (!k || !ad || !jt) {
    document.getElementById("hasil").textContent = "Semua input harus diisi!";
    return;
  }

  let hasil = '';
  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 9\n';
  hasil += garis + '\n\n';
  hasil += `Kelompok    : ${k}\n`;
  hasil += `Asal Daerah : ${ad}\n`;
  hasil += `Jumlah Tim  : ${jt}\n`;

  document.getElementById("hasil").textContent = hasil;
});