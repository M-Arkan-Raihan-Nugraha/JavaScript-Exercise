const Panjang = document.getElementById("panjang")
const Lebar = document.getElementById("lebar")
const Tinggi = document.getElementById("tinggi")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuasPermukaan = document.getElementById("txt-luaspermukaan")
const TextKeliling = document.getElementById("txt-keliling")
const TextVolume = document.getElementById("txt-volume")

BtnHitung.addEventListener("click", function(){
  let luaspermukaan = 2 * (parseFloat(Panjang.value)*parseFloat(Lebar.value) + parseFloat(Panjang.value)*parseFloat(Tinggi.value) + parseFloat(Lebar.value)*parseFloat(Tinggi.value))
  TextLuasPermukaan.innerHTML = luaspermukaan + " cm<sup>2</sup>"

  let keliling = parseFloat(Panjang.value) * parseFloat(Lebar.value) * parseFloat(Tinggi.value)
  TextKeliling.innerHTML = keliling + " cm"

  let volume = 4 * (parseFloat(Panjang.value) + parseFloat(Lebar.value) + parseFloat(Tinggi.value))
  TextVolume.innerHTML = volume + " cm<sup>3</sup>"
})