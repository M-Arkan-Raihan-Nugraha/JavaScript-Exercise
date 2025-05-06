const Alas = document.getElementById("alas")
const Tinggi = document.getElementById("tinggi")
const SisiMiring = document.getElementById("sisimiring")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuas = document.getElementById("txt-luas")
const TextKeliling = document.getElementById("txt-keliling")

BtnHitung.addEventListener("click", function(){
  let luas = 1/2 * parseFloat(Alas.value) * parseFloat(Tinggi.value)
  TextLuas.innerHTML = luas + " cm<sup>2</sup>"

  let keliling = parseFloat(Alas.value) + parseFloat(Tinggi.value) + parseFloat(SisiMiring.value)
  TextKeliling.innerHTML = keliling + " cm"
})