const Nilai = document.getElementById("nilai")
const BtnPeriksa = document.getElementById("btn-periksa")
const TextStatusKelulusan = document.getElementById("txt-statuskelulusan")

BtnPeriksa.addEventListener("click", function(){
  let statuskelulusan = () => {
    return Nilai.value > 75 ? "LULUS" : "TIDAK LULUS";
    }
    TextStatusKelulusan.innerHTML = statuskelulusan()
  })