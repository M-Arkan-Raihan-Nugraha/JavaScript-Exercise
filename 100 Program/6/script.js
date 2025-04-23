const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const Tinggi = document.getElementById("tinggi")

const BtnHitung = document.getElementById("btn-hitung")
const TextLuas = document.getElementById("txt-luas")
const TextKeliling = document.getElementById("txt-keliling")

BtnHitung.addEventListener("click", function(){
  let luas = 1/2 * (parseFloat(a.value) + parseFloat(b.value)) * parseFloat(Tinggi.value)
  TextLuas.innerHTML = luas + " cm<sup>2</sup>"

  let keliling = parseFloat(a.value) + parseFloat(b.value) + parseFloat(c.value) + parseFloat(d.value)
  TextKeliling.innerHTML = keliling + " cm"
})