const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const h = document.getElementById("huruf").value;
  const output = document.getElementById("hasil");
  const garis = "=".repeat(20);
  let hasil = `${garis}\nPROGRAM SOAL 14\n${garis}\n\n`;

  if (h === "") {
    hasil += "Input tidak boleh kosong.";
  }
  else if (/\d/.test(h)) {
    hasil += "Bukan Berupa Huruf";
  }
  else if ("aiueoAIUEO".includes(h)) {
    hasil += "Huruf Tersebut Termasuk Huruf Vokal";
  }
  else if (/[a-zA-Z]/.test(h)) {
    hasil += "Huruf Tersebut Termasuk Huruf Konsonan";
  }
  else {
    hasil += "Input tidak valid";
  }

  output.textContent = hasil;
});