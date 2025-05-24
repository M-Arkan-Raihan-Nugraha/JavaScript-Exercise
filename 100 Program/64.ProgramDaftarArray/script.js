const BtnDaftar = document.getElementById("btn-daftar")

BtnDaftar.addEventListener("click", function(){
  const nama = ["Rina", "Budi", "Sari", "Ali"];
  const daftar = document.getElementById('daftar');
  for (let i = 0; i < nama.length; i++) {
    const item = document.createElement('li');
    item.textContent = nama[i];
    daftar.appendChild(item);
  }
})