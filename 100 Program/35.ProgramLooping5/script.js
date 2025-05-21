const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  const awal = parseInt(document.getElementById("awal").value);
  const akhir = parseInt(document.getElementById("akhir").value);
  let hasil = "";
  let total = 0;
  let i = awal;

  if (isNaN(awal) || isNaN(akhir) || awal > akhir) {
    hasil = "Masukkan angka awal dan akhir yang benar!";
  }
  else {
    while (i <= akhir) {
      if (i < akhir) {
        hasil += i + " + ";
      } else {
        hasil += i + " = ";
      }
      total += i;
      i++;
    }
    hasil += total;
  }

  document.getElementById("hasil").innerHTML = hasil;
});