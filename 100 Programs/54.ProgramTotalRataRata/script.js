const BtnHitung = document.getElementById("btn-hitung")

BtnHitung.addEventListener("click", function(){
  const a = parseFloat(document.getElementById('a1').value);
      const b = parseFloat(document.getElementById('a2').value);
      const c = parseFloat(document.getElementById('a3').value);

      const total = a + b + c;
      const rata = total / 3;

      document.getElementById('total').textContent = total;
      document.getElementById('rata').textContent = rata.toFixed(2);
});