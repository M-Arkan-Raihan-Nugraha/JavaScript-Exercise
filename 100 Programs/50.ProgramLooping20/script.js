const BtnLoop = document.getElementById("btn-loop")

BtnLoop.addEventListener("click", function(){
  let n = parseInt(document.getElementById("jumlah").value);
  let i = 1;
  let tabelHTML = "<table>";

  while (i <= n) {
    let j = 1;
    tabelHTML += "<tr>";
    while (j <= n) {
      tabelHTML += `<td>${i * j}</td>`;
      j++;
    }
    tabelHTML += "</tr>";
    i++;
  }

  tabelHTML += "</table>";
  document.getElementById("hasil").innerHTML = tabelHTML;
});