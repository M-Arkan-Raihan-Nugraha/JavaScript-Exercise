const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let input = document.getElementById("nilai").value.trim();
  let nilaiArray = input.split(" ").map(Number);

  let jumlah = 0;
  let i = 0;

  while (i < nilaiArray.length) {
    jumlah += nilaiArray[i];
    i++;
  }

  let rata2 = jumlah / nilaiArray.length;

  document.getElementById("hasil").innerHTML =
    `Jumlah: ${jumlah}<br>Rata-rata: ${rata2.toFixed(2)}`;
});