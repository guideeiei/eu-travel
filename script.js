let trips = [];

function showTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(name).classList.add('active');
}

function renderDestinations() {
  const grid = document.getElementById('dest-grid');
  grid.innerHTML = DESTS.map(d => `
    <div class="card" onclick="openPlaceModal('${d.id}')">
      <div style="font-size:28px">${d.flag}</div>
      <div>${d.name}</div>
      <div style="font-size:12px;color:#8b8a9a">${d.country}</div>
    </div>
  `).join('');
}

function openPlaceModal(id) {
  const place = DESTS.find(d => d.id === id);
  const places = PLACE_GUIDES[id] || [];

  document.getElementById('place-title').textContent = `${place.flag} ${place.name}`;
  document.getElementById('place-list').innerHTML = places.map(p => `
    <div class="card" style="margin-bottom:8px;cursor:default">
      ${p.icon} ${p.name}<br>
      <small>${p.note}</small>
    </div>
  `).join('');

  document.getElementById('place-modal').classList.remove('hidden');
}

function closePlaceModal() {
  document.getElementById('place-modal').classList.add('hidden');
}

function openTripModal() {
  document.getElementById('trip-modal').classList.remove('hidden');
}

function closeTripModal() {
  document.getElementById('trip-modal').classList.add('hidden');
}

function saveTrip() {
  const dest = document.getElementById('trip-dest').value;
  const date = document.getElementById('trip-date').value;
  const budget = document.getElementById('trip-budget').value;

  trips.push({ dest, date, budget });
  renderTrips();
  closeTripModal();
}

function renderTrips() {
  const list = document.getElementById('trips-list');
  list.innerHTML = trips.map(t => `
    <div class="card">
      ✈️ ${t.dest}<br>
      📅 ${t.date}<br>
      💷 ${t.budget}
    </div>
  `).join('');
}

function renderPacking() {
  document.getElementById('pack-list').innerHTML = PACK_ITEMS.map(i => `
    <div class="card">🎒 ${i}</div>
  `).join('');
}

renderDestinations();
renderPacking();
