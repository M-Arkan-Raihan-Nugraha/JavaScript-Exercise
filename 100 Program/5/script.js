const Jari = document.getElementById("jari")
const Tinggi = document.getElementById("tinggi")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuasPermukaan = document.getElementById("txt-luaspermukaan")
const TextKeliling = document.getElementById("txt-keliling")
const TextVolume = document.getElementById("txt-volume")

BtnHitung.addEventListener("click", function(){
  let luaspermukaan = 2 * 3.14 * parseFloat(Jari.value)**2
  TextLuasPermukaan.innerHTML = luaspermukaan + " cm<sup>2</sup>"

  let keliling = 2 * 3.14 * parseFloat(Jari.value)
  TextKeliling.innerHTML = keliling + " cm"

  let volume = 3.14 * parseFloat(Jari.value)**2 * parseFloat(Tinggi.value)
  TextVolume.innerHTML = volume + " cm<sup>3</sup>"
})