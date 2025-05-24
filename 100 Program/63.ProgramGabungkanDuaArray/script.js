const BtnGabung = document.getElementById("btn-gabung")

BtnGabung.addEventListener("click", function(){
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const gabungan = arr1.concat(arr2);
  
  document.getElementById('hasil').textContent = gabungan.join(', ');
})