const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const angka = parseInt(document.getElementById('angka').value);
  if (angka % 2 == 0) {
    document.getElementById('txt-hasil').textContent = angka + ' adalah bilangan GENAP.';
    }
  else {
    document.getElementById('txt-hasil').textContent = angka + ' adalah bilangan GANJIL.';
    }
})