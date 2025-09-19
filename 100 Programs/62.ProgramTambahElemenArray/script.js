const BtnTambah = document.getElementById("btn-tambah")
const data = [];

BtnTambah.addEventListener("click", function(){
  const elemen = document.getElementById('elemen').value;
  if (elemen) {
    data.push(elemen);
    document.getElementById('hasil').textContent = data.join(', ');
    document.getElementById('elemen').value = '';
  }
})