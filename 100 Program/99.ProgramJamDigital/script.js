const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function updateClock() {
  const now = new Date();
  let jam = now.getHours().toString().padStart(2, "0");
  let menit = now.getMinutes().toString().padStart(2, "0");
  let detik = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("hasil").textContent = `${jam}:${menit}:${detik} WIB`;
  
  setInterval(updateClock, 1000);
  updateClock();
})