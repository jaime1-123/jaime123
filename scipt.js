let dados = JSON.parse(localStorage.getItem("zonas")) || [];

document.getElementById("formLixo").addEventListener("submit", function(e){
  e.preventDefault();

  const zona = document.getElementById("zona").value;
  const nivel = Number(document.getElementById("nivel").value);

  dados.push({ zona, nivel });
  localStorage.setItem("zonas", JSON.stringify(dados));

  this.reset();
  atualizarRanking();
});

function atualizarRanking() {
  const ranking = document.getElementById("ranking");
  ranking.innerHTML = "";

  const zonasAgrupadas = {};

  dados.forEach(item => {
    zonasAgrupadas[item.zona] = (zonasAgrupadas[item.zona] || 0) + item.nivel;
  });

  const lista = Object.entries(zonasAgrupadas)
    .sort((a, b) => b[1] - a[1]);

  lista.forEach(([zona, total]) => {
    const li = document.createElement("li");

    if (total >= 6) li.className = "alto";
    else if (total >= 3) li.className = "medio";
    else li.className = "baixo";

    li.textContent = `${zona} — Nível ${total}`;
    ranking.appendChild(li);
  });
}

atualizarRanking();