const Jari = document.getElementById("jari")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuas = document.getElementById("txt-luas")
const TextKeliling = document.getElementById("txt-keliling")

BtnHitung.addEventListener("click", function(){
  let luas = 3.14 * parseFloat(Jari.value) * parseFloat(Jari.value)
  TextLuas.innerHTML = luas + " cm<sup>2</sup>"

  let keliling = 2 * 3.14 * parseFloat(Jari.value)
  TextKeliling.innerHTML = keliling + " cm"
})