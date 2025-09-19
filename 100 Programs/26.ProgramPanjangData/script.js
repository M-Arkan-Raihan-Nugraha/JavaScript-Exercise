const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const Data = document.getElementById('data').value;
  document.getElementById('karakter').textContent = Data.length;
})