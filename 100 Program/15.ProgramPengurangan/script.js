const Angka1 = document.getElementById("angka1")
const Angka2 = document.getElementById("angka2")
const BtnHitung = document.getElementById("btn-hitung")
const TextHasil = document.getElementById("txt-hasil")

BtnHitung.addEventListener("click", function(){
  const Hasil = parseFloat(Angka1.value) - parseFloat(Angka2.value)
  TextHasil.innerHTML = Hasil
})