const Lampu = document.getElementById("lampu")
const BtnPeriksa = document.getElementById("btn-periksa")
const TextPerintah = document.getElementById("txt-perintah")

BtnPeriksa.addEventListener("click", function(){
  let lampu = () => {
    if (Lampu.value.toLowerCase() == "merah") {
      return "BERHENTI"
    }
    else if (Lampu.value.toLowerCase() == "kuning") {
      return "BERSIAP-SIAP"
    }
    else if (Lampu.value.toLowerCase() == "hijau") {
      return "JALAN"
    }
    else {
      return "BUKAN WARNA LAMPU LALU LINTAS"
    }
  }
  TextPerintah.innerHTML = lampu()
})