let dados = JSON.parse(localStorage.getItem("zonas")) || [];

/* ================= MAPA ================= */
const mapa = L.map('mapa').setView([-25.97, 32.58], 12); // Maputo (exemplo)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(mapa);

function corNivel(nivel) {
  if (nivel == 3) return "red";
  if (nivel == 2) return "orange";
  return "green";
}

/* ================= FORMULÁRIO ================= */
document.getElementById("formLixo").addEventListener("submit", function(e){
  e.preventDefault();

  const zona = document.getElementById("zona").value;
  const nivel = Number(document.getElementById("nivel").value);
  const data = new Date();

  // Coordenadas fictícias (protótipo)
  const lat = -25.95 + Math.random() * 0.05;
  const lng = 32.55 + Math.random() * 0.05;

  dados.push({ zona, nivel, mes: data.getMonth(), lat, lng });
  localStorage.setItem("zonas", JSON.stringify(dados));

  this.reset();
  atualizarMapa();
  atualizarGrafico();
});

/* ================= ATUALIZAR MAPA ================= */
function atualizarMapa() {
  dados.forEach(item => {
    L.circle([item.lat, item.lng], {
      color: corNivel(item.nivel),
      radius: 200
    }).addTo(mapa)
     .bindPopup(`<b>${item.zona}</b><br>Nível: ${item.nivel}`);
  });
}

/* ================= GRÁFICO MENSAL ================= */
function atualizarGrafico() {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const meses = Array(12).fill(0);

  dados.forEach(d => meses[d.mes]++);

  const largura = 20;
  meses.forEach((valor, i) => {
    ctx.fillRect(i * 25 + 20, 180 - valor * 15, largura, valor * 15);
    ctx.fillText(valor, i * 25 + 25, 175 - valor * 15);
  });

  ctx.fillText("Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez", 10, 195);
}

atualizarMapa();
atualizarGrafico();
function analisarIA() {
  const resultado = document.getElementById("iaResultado");
  resultado.innerHTML = "";

  const contagem = {};

  dados.forEach(d => {
    contagem[d.zona] = (contagem[d.zona] || 0) + d.nivel;
  });

  Object.entries(contagem)
    .sort((a,b) => b[1] - a[1])
    .slice(0,3)
    .forEach(z => {
      const li = document.createElement("li");
      li.textContent = `🚨 Zona crítica prevista: ${z[0]}`;
      resultado.appendChild(li);
    });
}
function analisarIA() {
  const resultado = document.getElementById("iaResultado");
  resultado.innerHTML = "";

  const contagem = {};

  dados.forEach(d => {
    contagem[d.zona] = (contagem[d.zona] || 0) + d.nivel;
  });

  Object.entries(contagem)
    .sort((a,b) => b[1] - a[1])
    .slice(0,3)
    .forEach(z => {
      const li = document.createElement("li");
      li.textContent = `🚨 Zona crítica prevista: ${z[0]}`;
      resultado.appendChild(li);
    });
}
function analisarIA() {
  const resultado = document.getElementById("iaResultado");
  resultado.innerHTML = "";

  const contagem = {};

  dados.forEach(d => {
    contagem[d.zona] = (contagem[d.zona] || 0) + d.nivel;
  });

  Object.entries(contagem)
    .sort((a,b) => b[1] - a[1])
    .slice(0,3)
    .forEach(z => {
      const li = document.createElement("li");
      li.textContent = `🚨 Zona crítica prevista: ${z[0]}`;
      resultado.appendChild(li);
    });
}
function analisarIA() {
  const resultado = document.getElementById("iaResultado");
  resultado.innerHTML = "";

  const contagem = {};

  dados.forEach(d => {
    contagem[d.zona] = (contagem[d.zona] || 0) + d.nivel;
  });

  Object.entries(contagem)
    .sort((a,b) => b[1] - a[1])
    .slice(0,3)
    .forEach(z => {
      const li = document.createElement("li");
      li.textContent = `🚨 Zona crítica prevista: ${z[0]}`;
      resultado.appendChild(li);
    });
}
