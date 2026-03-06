// Inicializar mapa (exemplo: Maputo)
const map = L.map('map').setView([-25.9653, 32.5892], 12);

// Camada do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Ícones por nível de lixo
function corPorNivel(nivel) {
  if (nivel === "alto") return "red";
  if (nivel === "medio") return "orange";
  return "green";
}

// Dados simulados (depois virão do formulário)
const zonas = [
  { bairro: "Bairro Central", lat: -25.963, lng: 32.589, nivel: "alto" },
  { bairro: "Chamanculo", lat: -25.979, lng: 32.573, nivel: "medio" },
  { bairro: "Maxaquene", lat: -25.952, lng: 32.565, nivel: "baixo" }
];

// Adicionar marcadores
zonas.forEach(zona => {
  L.circleMarker([zona.lat, zona.lng], {
    radius: 10,
    color: corPorNivel(zona.nivel),
    fillColor: corPorNivel(zona.nivel),
    fillOpacity: 0.8
  })
  .addTo(map)
  .bindPopup(`
    <strong>${zona.bairro}</strong><br>
    Nível de lixo: ${zona.nivel.toUpperCase()}
  `);
});
const denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];

function corPorNivel(nivel) {
  if (nivel === "alto") return "red";
  if (nivel === "medio") return "orange";
  return "green";
}

denuncias.forEach((d, index) => {
  // Coordenadas simuladas (depois podem vir do GPS)
  const lat = -25.96 + Math.random() * 0.03;
  const lng = 32.58 + Math.random() * 0.03;

  L.circleMarker([lat, lng], {
    radius: 10,
    color: corPorNivel(d.nivel),
    fillColor: corPorNivel(d.nivel),
    fillOpacity: 0.8
  })
  .addTo(map)
  .bindPopup(`
    <strong>${d.bairro}</strong><br>
    Tipo: ${d.tipo}<br>
    Data: ${new Date(d.data).toLocaleDateString()}
  `);
});
