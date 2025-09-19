const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const garis = "=".repeat(20);
  const nama = document.getElementById("nama").value.trim();
  const nilai = parseFloat(document.getElementById("nilai").value);

  if (!nama || isNaN(nilai) || nilai < 0 || nilai > 100) {
    document.getElementById("hasil").textContent = "Isi nama dan nilai dengan benar (nilai 0-100).";
    return;
  }

  let grade = "";
  if (nilai > 90) grade = "A";
  else if (nilai > 80) grade = "B";
  else if (nilai > 70) grade = "C";
  else if (nilai > 60) grade = "D";
  else grade = "E";

  const hasil = `${garis}
PROGRAM SOAL 12
${garis}

Nama: ${nama}
Nilai: ${nilai}
Grade: ${grade}`;

  document.getElementById("hasil").textContent = hasil;
});