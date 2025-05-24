const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // ubah ke meter

  if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
    document.getElementById("hasil").textContent = "Masukkan berat dan tinggi yang valid!";
    return;
  }

  const bmi = berat / (tinggi * tinggi);
  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
  }
  else if (bmi < 25) {
    kategori = "Normal";
  }
  else if (bmi < 30) {
    kategori = "Gemuk (Overweight)";
  }
  else {
  kategori = "Obesitas";
  }

  document.getElementById("hasil").textContent = 
    `BMI Anda: ${bmi.toFixed(2)} → ${kategori}`;
})