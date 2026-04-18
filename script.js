```javascript id="3u4m2k"
const DESTS = [
  { id:'paris', flag:'🇫🇷', name:'Paris', country:'France' },
  { id:'rome', flag:'🇮🇹', name:'Rome', country:'Italy' },
  { id:'oslo', flag:'🇳🇴', name:'Oslo', country:'Norway' }
];

let wishlist = new Set(['paris']);
let trips = [];

function showTab(name){
  document.querySelectorAll('.panel').forEach(panel=>{
    panel.classList.remove('active');
  });

  document.getElementById('panel-' + name).classList.add('active');

  if(name === 'home') renderHome();
  if(name === 'dest') renderDestGrid();
  if(name === 'wish') renderWishlist();
}

function renderDestGrid(){
  const grid = document.getElementById('dest-grid');

  grid.innerHTML = DESTS.map(d => `
    <div class="card" onclick="toggleWish('${d.id}')">
      <div>${d.flag}</div>
      <div>${d.name}</div>
      <div>${d.country}</div>
    </div>
  `).join('');
}

function toggleWish(id){
  if(wishlist.has(id)){
    wishlist.delete(id);
  } else {
    wishlist.add(id);
  }

  renderDestGrid();
  renderHome();
}

function renderWishlist(){
  const wrap = document.getElementById('wish-list');

  wrap.innerHTML = [...wishlist].map(id => {
    const d = DESTS.find(x => x.id === id);
    return `<div class="card">${d.flag} ${d.name}</div>`;
  }).join('');
}

function renderHome(){
  document.getElementById('s-trips').textContent = trips.length;
  document.getElementById('s-wish').textContent = wishlist.size;

  const recs = document.getElementById('dash-recs');

  recs.innerHTML = DESTS.map(d => `
    <div class="dest-mini" onclick="toggleWish('${d.id}')">
      <div>${d.flag}</div>
      <div>${d.name}</div>
    </div>
  `).join('');
}

renderHome();
renderDestGrid();
```
