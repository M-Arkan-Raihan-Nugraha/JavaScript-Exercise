const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const input = document.getElementById('input').value;
  if (input === '') {
        document.getElementById('hasil').textContent = 'INPUT TIDAK BOLEH KOSONG.';
        return;
  }

  const angka = Number(input);
  if (isNaN(angka)) {
    document.getElementById('hasil').textContent = 'INI BUKAN ANGKA.';
    }
  else {
    let jenis = '';
    if (Number.isInteger(angka)) {
      if (angka > 0) {
        jenis = 'BILANGAN BULAT POSITIF';
      }
      else if (angka < 0) {
        jenis = 'BILANGAN BULAT NEGATIF';
        }
      else {
        jenis = 'NOL';
        }
    }
    else {
      jenis = 'BILANGAN DESIMAL';
      }

  document.getElementById('hasil').textContent = `${angka} adalah ${jenis}.`;
  }
});