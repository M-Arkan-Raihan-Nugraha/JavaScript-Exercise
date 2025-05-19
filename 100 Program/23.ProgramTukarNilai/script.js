const BtnTukar = document.getElementById("btn-tukar")

BtnTukar.addEventListener("click", function(){
  let a = document.getElementById('a').value;
  let b = document.getElementById('b').value;
  let temp = a;
  a = b;
  b = temp;
  document.getElementById('hasilA').textContent = a;
  document.getElementById('hasilB').textContent = b;
})