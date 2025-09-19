const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const data = document.getElementById('data').value;
  let hasil;
  if (!isNaN(data)) {
    hasil = "number";
  }
  else if (data === "true") {
    hasil = "boolean";
  }
  else if (data == "false") {
    hasil = "boolean"
  }
  else {
    hasil = "string";
  }
  document.getElementById('hasil').textContent = hasil;
})