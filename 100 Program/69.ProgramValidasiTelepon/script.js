const BtnPeriksa = document.getElementById("btn-periksa")

BtnPeriksa.addEventListener("click", function(){
  const tel = document.getElementById('telepon').value;
      const regex = /^08\d{8,12}$/;
      const valid = regex.test(tel);
      document.getElementById('hasil').textContent = valid ? 'Nomor valid' : 'Nomor tidak valid';
    
})