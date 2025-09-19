const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let jumlah = parseInt(document.getElementById("jumlah").value);
  let i = 1;
  let hasil = '';

  while (i <= jumlah) {
    hasil += `1 x ${i} = ${1 * i} &nbsp;&nbsp;&nbsp; 2 x ${i} = ${2 * i}<br>`;
    i++;
  }
  document.getElementById("hasil").innerHTML = hasil;
});