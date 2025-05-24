const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  let num = parseInt(document.getElementById('angka').value);
  if (num < 1 || num > 3999) {
    document.getElementById('hasil').textContent = "Harus antara 1–3999";
    return;
  }

  const romawi = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  let hasil = '';
  for (let [val, simbol] of romawi) {
    while (num >= val) {
    hasil += simbol;
    num -= val;
    }
  }
  
  document.getElementById('hasil').textContent = hasil;  
})