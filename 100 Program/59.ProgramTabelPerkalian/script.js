const BtnTampil = document.getElementById("btn-tampil")

BtnTampil.addEventListener("click", function(){
  const tabel = document.getElementById('tabel');
  let header = '<tr><th>x</th>';
  for (let i = 1; i <= 10; i++) {
    header += `<th>${i}</th>`;
  }
  header += '</tr>';
  tabel.innerHTML += header;
  for (let i = 1; i <= 10; i++) {
    let baris = `<tr><th>${i}</th>`;
    for (let j = 1; j <= 10; j++) {
      baris += `<td>${i * j}</td>`;
    }
    baris += '</tr>';
    tabel.innerHTML += baris;
  }
})