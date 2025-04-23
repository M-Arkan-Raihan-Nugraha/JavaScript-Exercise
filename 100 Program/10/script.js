const LuasAlas = document.getElementById("luas-alas")
const LuasSelubung = document.getElementById("luas-selubung")
const Tinggi = document.getElementById("tinggi")
const BtnHitung = document.getElementById("btn-hitung")
const TextLuasPermukaan = document.getElementById("txt-luaspermukaan")
const TextVolume = document.getElementById("txt-volume")

BtnHitung.addEventListener("click", function(){
  let luaspermukaan = parseFloat(LuasAlas.value) + parseFloat(LuasSelubung.value)
  TextLuasPermukaan.innerHTML = luaspermukaan + " cm<sup>2</sup>"

  let volume = 1/3 * parseFloat(LuasAlas.value) * parseFloat(Tinggi.value)
  TextVolume.innerHTML = volume + " cm<sup>3</sup>"
})