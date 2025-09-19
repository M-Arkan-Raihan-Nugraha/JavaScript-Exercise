const Nomor = document.getElementById("nomor")
const BtnPeriksa = document.getElementById("btn-periksa")
const TextNama = document.getElementById("txt-nama")

BtnPeriksa.addEventListener("click", function(){
  let nomor = () => {
    if (Nomor.value == 1) {
      return "JANUARI"
    }
    else if (Nomor.value == 2) {
      return "FEBRUARI"
    }
    else if (Nomor.value == 3) {
      return "MARET"
    }
    else if (Nomor.value == 4) {
      return "APRIL"
    }
    else if (Nomor.value == 5) {
      return "MEI"
    }
    else if (Nomor.value == 6) {
      return "JUNI"
    }
    else if (Nomor.value == 7) {
      return "JULI"
    }
    else if (Nomor.value == 8) {
      return "AGUSTUS"
    }
    else if (Nomor.value == 9) {
      return "SEPTEMBER"
    }
    else if (Nomor.value == 10) {
      return "OKTOBER"
    }
    else if (Nomor.value == 11) {
      return "NOVEMBER"
    }
    else if (Nomor.value == 12) {
      return "DESEMBER"
    }
    else {
      return "BUKAN NOMOR BULAN"
    }
  }
  TextNama.innerHTML = nomor()
})