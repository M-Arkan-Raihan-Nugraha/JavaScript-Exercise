const BtnKonversi = document.getElementById("btn-konversi")

BtnKonversi.addEventListener("click", function(){
  const map = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
      const angka = document.getElementById('angka').value;
      let hasil = '';
      for (let char of angka) {
        if (!isNaN(char) && char !== ' ') {
          hasil += map[char] + ' ';
        }
      }
      document.getElementById('hasil').textContent = hasil.trim(); 
})