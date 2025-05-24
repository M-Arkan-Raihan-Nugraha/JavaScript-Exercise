const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  let garis = '='.repeat(20);
  let hasil = '';

  hasil += garis + '\n';
  hasil += 'PROGRAM SOAL 2\n';
  hasil += garis + '\n\n';

  hasil += 'M ARKAN RAIHAN NUGRAHA\n';
  hasil += '58,5 kg\n';
  hasil += '168 cm';

  document.getElementById("hasil").textContent = hasil;
});