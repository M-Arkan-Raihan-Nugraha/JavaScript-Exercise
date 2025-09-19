const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const n = parseInt(document.getElementById('jumlah').value);
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    }
    
  document.getElementById('hasil').textContent = fib.slice(0, n).join(', ');
})