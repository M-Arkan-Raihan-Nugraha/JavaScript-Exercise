const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const x = parseInt(document.getElementById("x").value);
  const y = parseInt(document.getElementById("y").value);
  const z = parseInt(document.getElementById("z").value);

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    document.getElementById("hasil").textContent = "Semua nilai harus diisi dan berupa angka.";
    return;
  }

  const garis = '='.repeat(20);
  let hasil = `${garis}\nPROGRAM SOAL 13\n${garis}\n\n`;

  if (x > y && x > z) {
    hasil += `Nilai Terbesar: ${x}\n`;
  } else if (y > x && y > z) {
    hasil += `Nilai Terbesar: ${y}\n`;
  } else if (z > x && z > y) {
    hasil += `Nilai Terbesar: ${z}\n`;
  } else {
    hasil += "Terdapat nilai yang sama sebagai terbesar.\n";
  }

  if (x < y && x < z) {
    hasil += `Nilai Terkecil: ${x}`;
  } else if (y < x && y < z) {
    hasil += `Nilai Terkecil: ${y}`;
  } else if (z < x && z < y) {
    hasil += `Nilai Terkecil: ${z}`;
  } else {
    hasil += "Terdapat nilai yang sama sebagai terkecil.";
  }

  document.getElementById("hasil").textContent = hasil;
});