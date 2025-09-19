const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const email = document.getElementById('email').value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(email);
  
  document.getElementById('hasil').textContent = valid ? 'Email valid' : 'Email tidak valid';
})