const Sisi = document.getElementById("sisi")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuas = document.getElementById("txt-luas")
const TextKeliling = document.getElementById("txt-keliling")

BtnHitung.addEventListener("click", function(){
  let luas = parseFloat(Sisi.value) * parseFloat(Sisi.value)
  TextLuas.innerHTML = luas + " cm<sup>2</sup>"

  let keliling = parseFloat(Sisi.value) * 4
  TextKeliling.innerHTML = keliling + " cm"
})