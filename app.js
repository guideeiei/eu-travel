/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const COUNTRIES = [
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    places: [
      { name: 'Eiffel Tower',         image: 'images/eiffel.jpg',                    place: 'Paris' },
      { name: 'Louvre Museum',         image: 'images/louvre.jpg',                    place: 'Paris' },
      { name: 'Lafayette',             image: 'images/Lafayette.jpg',                 place: 'Paris' },
      { name: 'Bourse de Commerce',    image: 'images/Bourse de Commerce.jpg',        place: 'Paris' },
      { name: 'Cafe de Flore',         image: 'images/Cafe de Flore.jpg',             place: 'Paris' },
      { name: 'Disneyland Paris',      image: 'images/Disneyland Paris.jpg',          place: 'Paris' },
      { name: 'Montmartre',            image: 'images/Montmartre.jpg',                place: 'Paris' },
    ],
    restaurants: [
      { name: 'Le Comptoir du Relais', emoji: '🥐', city: 'Paris', cuisine: 'French Bistro', price: '££',  note: 'Classic bistro in Saint-Germain, queue early', tags: ['Bistro', 'Local', 'Lunch'] },
      { name: 'Septime',               emoji: '🍷', city: 'Paris', cuisine: 'Modern French',  price: '£££', note: 'One of Paris\'s best neo-bistros, book weeks ahead', tags: ['Fine Dining', 'Wine'] },
      { name: 'L\'As du Fallafel',     emoji: '🧆', city: 'Paris', cuisine: 'Middle Eastern', price: '£',  note: 'Legendary falafel in the Marais, always a queue', tags: ['Street Food', 'Quick', 'Cheap'] },
      { name: 'Breizh Café',           emoji: '🫔', city: 'Paris', cuisine: 'Crêperie',        price: '££', note: 'Best buckwheat galettes in Paris', tags: ['Brunch', 'Casual'] },
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    places: [
      { name: 'Duomo di Milano',              image: 'images/Duomo di Milano.jpg',              place: 'Milan' },
      { name: 'Galleria Vittorio Emanuele II', image: 'images/Galleria Vittorio Emanuele ll.jpg', place: 'Milan' },
      { name: 'Colosseum',                    image: 'images/Colosseum.jpg',                    place: 'Rome' },
      { name: 'Trastevere',                   image: 'images/Trastevere.jpg',                   place: 'Rome' },
      { name: 'Palazzo Colonna',              image: 'images/Palazzo Colonna.jpg',              place: 'Rome' },
      { name: 'Sistine Chapel',               image: 'images/Sistine Chapel.jpg',               place: 'Rome' },
      { name: 'Vatican Museums',              image: 'images/Vatican Museums.jpg',              place: 'Vatican' },
      { name: 'Pantheon',                     image: 'images/Pantheon.jpg',                     place: 'Vatican' },
      { name: 'Lake Como',                    image: 'images/Lake Como.jpg',                    place: 'Lombardy' },
    ],
    restaurants: [
      { name: 'Trattoria da Enzo al 29', emoji: '🍝', city: 'Rome',  cuisine: 'Roman',   price: '££',  note: 'Soul of Roman cooking — cacio e pepe is unmissable', tags: ['Local', 'Must-try', 'Pasta'] },
      { name: 'Pizzarium',               emoji: '🍕', city: 'Rome',  cuisine: 'Pizza',    price: '£',   note: 'Bonci\'s legendary pizza al taglio near the Vatican', tags: ['Pizza', 'Quick', 'Famous'] },
      { name: 'Osteria Francescana',     emoji: '⭐', city: 'Milan', cuisine: 'Italian',  price: '£££', note: '3 Michelin stars — book months ahead', tags: ['Fine Dining', 'Special Occasion'] },
      { name: 'Luini',                   emoji: '🥟', city: 'Milan', cuisine: 'Street',   price: '£',   note: 'Famous panzerotti spot near the Duomo', tags: ['Street Food', 'Quick', 'Cheap'] },
      { name: 'Gelateria dei Gracchi',   emoji: '🍦', city: 'Rome',  cuisine: 'Gelato',   price: '£',   note: 'Artisanal gelato, try pistachio and hazelnut', tags: ['Dessert', 'Must-try'] },
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    places: [
      { name: 'Jungfraujoch',    image: '', place: 'Interlaken' },
      { name: 'Lake Thun',       image: '', place: 'Interlaken' },
      { name: 'Old Town Zürich', image: '', place: 'Zürich' },
      { name: 'Lake Zurich',     image: '', place: 'Zürich' },
    ],
    restaurants: [
      { name: 'Zeughauskeller', emoji: '🧀', city: 'Zürich',     cuisine: 'Swiss',    price: '££',  note: 'Traditional Swiss food in a historic beer hall', tags: ['Traditional', 'Fondue', 'Beer'] },
      { name: 'Hiltl',          emoji: '🥗', city: 'Zürich',     cuisine: 'Vegetarian', price: '££', note: 'World\'s oldest vegetarian restaurant', tags: ['Vegetarian', 'Buffet'] },
      { name: 'Gasthof Hirschen',emoji: '🫕', city: 'Interlaken', cuisine: 'Swiss',    price: '££',  note: 'Cozy mountain fondue and raclette', tags: ['Fondue', 'Cozy', 'Local'] },
    ]
  },
  {
    id: 'norway',
    name: 'Norway',
    flag: '🇳🇴',
    places: [
      { name: 'Vigeland Park',     image: '', place: 'Oslo' },
      { name: 'Aker Brygge',       image: '', place: 'Oslo' },
      { name: 'Oslo Opera House',  image: '', place: 'Oslo' },
      { name: 'Flåm Railway',      image: '', place: 'Flåm' },
    ],
    restaurants: [
      { name: 'Maaemo',        emoji: '🌿', city: 'Oslo', cuisine: 'Nordic',   price: '£££', note: '3 Michelin stars, the best of New Nordic cuisine', tags: ['Fine Dining', 'Nordic'] },
      { name: 'Mathallen Oslo',emoji: '🛒', city: 'Oslo', cuisine: 'Food Hall', price: '££', note: 'Oslo\'s best food market — try local vendors', tags: ['Market', 'Casual', 'Local'] },
      { name: 'Smalhans',      emoji: '🐟', city: 'Oslo', cuisine: 'Norwegian', price: '££', note: 'Set menu with seasonal Norwegian produce', tags: ['Seasonal', 'Local', 'Set Menu'] },
    ]
  },
];

const DESTS = [
  { id:'paris',     flag:'🇫🇷', name:'Paris',     country:'France',         desc:'Cafés, art, and the Eiffel Tower at golden hour.',      best:['spring','autumn'], tags:['Romantic','Art','Food'],      color:'#ff6ba0' },
  { id:'rome',      flag:'🇮🇹', name:'Rome',      country:'Italy',          desc:'Ancient ruins, gelato, and incredible pasta.',          best:['spring','autumn'], tags:['History','Food','Architecture'],color:'#f5a923' },
  { id:'florence',  flag:'🇮🇹', name:'Florence',  country:'Italy',          desc:'Renaissance art and Tuscan wine country.',              best:['spring','autumn'], tags:['Art','Culture','Wine'],       color:'#ff6b33' },
  { id:'venice',    flag:'🇮🇹', name:'Venice',    country:'Italy',          desc:'Gondola rides through winding canals.',                 best:['spring','winter'], tags:['Romantic','Unique'],          color:'#3b9fff' },
  { id:'zurich',    flag:'🇨🇭', name:'Zürich',   country:'Switzerland',     desc:'Alpine lakes framed by snowy mountains.',               best:['summer','winter'], tags:['Luxury','Scenic'],            color:'#a99fff' },
  { id:'interlaken',flag:'🇨🇭', name:'Interlaken',country:'Switzerland',    desc:'Paragliding, Jungfrau, and turquoise lakes.',           best:['summer','winter'], tags:['Adventure','Nature'],         color:'#00d4aa' },
  { id:'oslo',      flag:'🇳🇴', name:'Oslo',      country:'Norway',         desc:'Fjords and Northern Lights in winter.',                 best:['winter','summer'], tags:['Aurora','Fjords'],            color:'#3b9fff' },
  { id:'stockholm', flag:'🇸🇪', name:'Stockholm', country:'Sweden',         desc:'Colorful old town and archipelago sailing.',            best:['summer','spring'], tags:['Design','Charming'],          color:'#ffd700' },
  { id:'copenhagen',flag:'🇩🇰', name:'Copenhagen',country:'Denmark',        desc:'Hygge culture and a top food scene.',                   best:['summer','spring'], tags:['Food','Cozy'],                color:'#ff6ba0' },
  { id:'amsterdam', flag:'🇳🇱', name:'Amsterdam', country:'Netherlands',    desc:'Tulip fields, canals, and world-class art.',            best:['spring','summer'], tags:['Canals','Art'],               color:'#ff6b33' },
  { id:'barcelona', flag:'🇪🇸', name:'Barcelona', country:'Spain',          desc:'Gaudí, beaches, tapas, and nightlife.',                 best:['spring','autumn'], tags:['Architecture','Beach'],       color:'#f5a923' },
  { id:'prague',    flag:'🇨🇿', name:'Prague',    country:'Czech Republic', desc:'Fairy-tale castle skyline on a budget.',               best:['spring','autumn'], tags:['Historic','Affordable'],      color:'#9b8fff' },
];

const PACK_ITEMS = {
  'Documents & Money': ['Passport','Visa / travel documents','Travel insurance','Credit & debit cards','Emergency cash (GBP + EUR)','Printed hotel bookings'],
  'Clothes':           ['T-shirts / tops','Trousers / jeans','Jacket or coat','Underwear & socks','Comfortable walking shoes','One smart outfit'],
  'Toiletries':        ['Toothbrush & toothpaste','Shampoo & conditioner','Deodorant','Sunscreen SPF50','Lip balm','Skincare essentials'],
  'Tech & Gadgets':    ['Phone + charger','Power bank','Universal adapter (EU plug)','Earphones','Camera','Download offline maps'],
  'Health & Safety':   ['Paracetamol / ibuprofen','Allergy medication','Plasters / first aid','Hand sanitiser','Face masks','Prescription meds'],
  'Couple Essentials': ['Matching outfit (optional 😄)','Neck pillow for trains','Snacks for the journey','Journal / travel diary','Couple selfie poses list 📸'],
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */

let wishlist    = new Set(['paris', 'interlaken', 'oslo']);
let trips       = [];
let packState   = {};
let destFilter  = 'all';
let budgetChart = null;

// Explore drill-down state
let exploreLevel      = 1;   // 1 = country list, 2 = city+places
let activeCountryId   = null;
let activeCityFilter  = 'all';
let activeSeg         = 'places'; // 'places' | 'restaurants'

// Init pack checkboxes
Object.entries(PACK_ITEMS).forEach(([, items]) => items.forEach(item => packState[item] = false));

/* ══════════════════════════════════════════
   TAB NAVIGATION
══════════════════════════════════════════ */

const TABS = ['home', 'dest', 'trips', 'wish', 'pack'];

function showTab(name) {
  TABS.forEach(t => {
    document.getElementById('panel-' + t).classList.toggle('active', t === name);
    const el = document.getElementById('tab-' + t);
    el.classList.toggle('active', t === name);
    const strokeColor = t === name ? 'var(--accent2)' : 'var(--text3)';
    el.querySelectorAll('path,circle,rect,polyline').forEach(p => p.setAttribute('stroke', strokeColor));
  });

  // Reset explore to level 1 when switching away and back
  if (name === 'dest') {
    if (exploreLevel === 1) renderCountryList();
    updateExploreNav();
  }
  if (name === 'home')  renderHome();
  if (name === 'trips') renderTrips();
  if (name === 'wish')  renderWishlist();
  if (name === 'pack')  renderPack();
}

/* ══════════════════════════════════════════
   EXPLORE — LEVEL 1: COUNTRY LIST
══════════════════════════════════════════ */

function renderCountryList() {
  const q    = (document.getElementById('country-search')?.value || '').toLowerCase();
  const list = document.getElementById('country-list');
  const data = COUNTRIES.filter(c => !q || c.name.toLowerCase().includes(q));

  list.innerHTML = data.map(c => {
    const cities    = [...new Set(c.places.map(p => p.place))];
    const restoCount = (c.restaurants || []).length;
    return `
      <div class="country-card" onclick="openCountry('${c.id}')">
        <div class="country-flag">${c.flag}</div>
        <div class="country-info">
          <div class="country-name">${c.name}</div>
          <div class="country-meta">${cities.length} cities · ${c.places.length} places · ${restoCount} restaurants</div>
        </div>
        <svg class="country-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 3l5 5-5 5"/>
        </svg>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   EXPLORE — LEVEL 2: COUNTRY DETAIL
══════════════════════════════════════════ */

function openCountry(id) {
  activeCountryId  = id;
  activeCityFilter = 'all';
  activeSeg        = 'places';
  exploreLevel     = 2;

  const country = COUNTRIES.find(c => c.id === id);

  // Show/hide levels
  document.getElementById('level-1').style.display = 'none';
  document.getElementById('level-2').style.display = 'block';

  // Update topbar
  document.getElementById('topbar-title').textContent = country.flag + ' ' + country.name;
  document.getElementById('topbar-sub').textContent   = 'Explore places & restaurants';
  document.getElementById('back-btn').classList.add('show');

  // Build city chips
  const cities = ['all', ...new Set(country.places.map(p => p.place))];
  document.getElementById('city-chips').innerHTML = cities.map(city => `
    <div class="city-chip ${city === 'all' ? 'active' : ''}"
         onclick="setCityFilter(this, '${city}')">
      ${city === 'all' ? '🗺 All cities' : city}
    </div>`).join('');

  // Reset segment to places
  document.getElementById('seg-places').classList.add('active');
  document.getElementById('seg-restaurants').classList.remove('active');
  document.getElementById('places-content').style.display     = 'block';
  document.getElementById('restaurants-content').style.display = 'none';

  renderPlaces();
  renderRestaurants();
}

function goBack() {
  exploreLevel    = 1;
  activeCountryId = null;

  document.getElementById('level-1').style.display = 'block';
  document.getElementById('level-2').style.display = 'none';

  document.getElementById('topbar-title').textContent = '✈ EuroTrip';
  document.getElementById('topbar-sub').textContent   = 'Bubuu🧸 & Bibii🐶 · UK Base';
  document.getElementById('back-btn').classList.remove('show');

  renderCountryList();
}

function updateExploreNav() {
  const show = exploreLevel === 2;
  document.getElementById('back-btn').classList.toggle('show', show);
}

/* ── City filter ── */
function setCityFilter(el, city) {
  activeCityFilter = city;
  document.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderPlaces();
  renderRestaurants();
}

/* ── Segment control ── */
function setSeg(seg) {
  activeSeg = seg;
  document.getElementById('seg-places').classList.toggle('active', seg === 'places');
  document.getElementById('seg-restaurants').classList.toggle('active', seg === 'restaurants');
  document.getElementById('places-content').style.display      = seg === 'places'      ? 'block' : 'none';
  document.getElementById('restaurants-content').style.display = seg === 'restaurants' ? 'block' : 'none';
}

/* ── Render places grid ── */
function renderPlaces() {
  const country = COUNTRIES.find(c => c.id === activeCountryId);
  if (!country) return;

  const filtered = activeCityFilter === 'all'
    ? country.places
    : country.places.filter(p => p.place === activeCityFilter);

  const grid = document.getElementById('places-grid');

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1;padding:32px 0;"><div class="empty-icon">📍</div><div style="font-size:13px;color:var(--text2);">No places for this city yet.</div></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="place-card">
      <div class="place-img-wrap">
        ${p.image
          ? `<img src="${p.image}" class="place-img" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\'place-img-placeholder\'>${country.flag}</div>'">`
          : `<div class="place-img-placeholder">${country.flag}</div>`}
      </div>
      <div class="place-info">
        <div class="place-name">${p.name}</div>
        <div class="place-city">${p.place}</div>
      </div>
    </div>`).join('');
}

/* ── Render restaurants ── */
function renderRestaurants() {
  const country = COUNTRIES.find(c => c.id === activeCountryId);
  if (!country) return;

  const all = country.restaurants || [];
  const filtered = activeCityFilter === 'all'
    ? all
    : all.filter(r => r.city === activeCityFilter);

  const list = document.getElementById('resto-list');

  if (!filtered.length) {
    list.innerHTML = `<div class="empty" style="padding:24px 0;"><div class="empty-icon">🍽</div><div style="font-size:13px;color:var(--text2);">No restaurants yet.<br>Add one below!</div></div>`;
    return;
  }

  list.innerHTML = filtered.map((r, i) => `
    <div class="resto-card">
      <div class="resto-emoji">${r.emoji || '🍴'}</div>
      <div class="resto-info">
        <div class="resto-name">${r.name}</div>
        <div class="resto-meta">${r.cuisine} · ${r.city}${r.custom ? ' · <span class="resto-custom-badge">Added by you</span>' : ''}</div>
        ${r.note ? `<div class="resto-note">${r.note}</div>` : ''}
        <div class="resto-tags">${(r.tags || []).map(t => `<span class="resto-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="resto-right">
        <div class="resto-price">${r.price}</div>
        ${r.custom ? `<button class="btn btn-danger btn-sm" onclick="deleteResto('${activeCountryId}', ${i})">✕</button>` : ''}
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   ADD RESTAURANT MODAL
══════════════════════════════════════════ */

function openRestoModal() {
  const country = COUNTRIES.find(c => c.id === activeCountryId);
  const cityLabel = activeCityFilter === 'all' ? country.name : `${activeCityFilter}, ${country.name}`;
  document.getElementById('resto-modal-sub').textContent = cityLabel;
  document.getElementById('resto-modal-bg').classList.add('open');
}

function closeRestoModal() {
  document.getElementById('resto-modal-bg').classList.remove('open');
}

function saveResto() {
  const name    = document.getElementById('r-name').value.trim();
  const emoji   = document.getElementById('r-emoji').value.trim();
  const cuisine = document.getElementById('r-cuisine').value.trim();
  const price   = document.getElementById('r-price').value;
  const note    = document.getElementById('r-note').value.trim();
  const tagsRaw = document.getElementById('r-tags').value.trim();

  if (!name) { toast('Enter a restaurant name'); return; }

  const country = COUNTRIES.find(c => c.id === activeCountryId);
  if (!country.restaurants) country.restaurants = [];

  const city = activeCityFilter === 'all'
    ? [...new Set(country.places.map(p => p.place))][0] || country.name
    : activeCityFilter;

  country.restaurants.push({
    name,
    emoji: emoji || '🍴',
    city,
    cuisine: cuisine || 'Restaurant',
    price,
    note,
    tags: tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [],
    custom: true,
  });

  closeRestoModal();
  ['r-name','r-emoji','r-cuisine','r-note','r-tags'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('r-price').value = '££';

  renderRestaurants();
  toast('Restaurant added! 🍽');
}

function deleteResto(countryId, index) {
  const country = COUNTRIES.find(c => c.id === countryId);
  // find only among custom ones rendered in current filtered view
  const all      = country.restaurants || [];
  const filtered = activeCityFilter === 'all' ? all : all.filter(r => r.city === activeCityFilter);
  const target   = filtered[index];
  if (!target) return;
  const globalIdx = country.restaurants.indexOf(target);
  if (globalIdx > -1) country.restaurants.splice(globalIdx, 1);
  renderRestaurants();
  toast('Removed');
}

/* ══════════════════════════════════════════
   WISHLIST (home recs tap to toggle)
══════════════════════════════════════════ */

function toggleWish(id) {
  if (wishlist.has(id)) wishlist.delete(id); else wishlist.add(id);
  updateBadges();
}

function renderWishlist() {
  const wrap  = document.getElementById('wish-list');
  const items = [...wishlist].map(id => DESTS.find(d => d.id === id)).filter(Boolean);
  if (!items.length) {
    wrap.innerHTML = `<div class="empty"><div class="empty-icon">💜</div><div class="empty-title">Nothing saved yet</div><div class="empty-sub">Go to Explore and add destinations</div><button class="btn btn-primary" onclick="showTab('dest')">Browse</button></div>`;
    return;
  }
  wrap.innerHTML = `<div class="wish-grid">${items.map(d => `
    <div class="wish-card">
      <div class="wish-flag">${d.flag}</div>
      <div class="wish-info"><div class="wish-name">${d.name}</div><div class="wish-country">${d.country}</div></div>
      <button class="wish-rm" onclick="wishlist.delete('${d.id}');renderWishlist();updateBadges();">×</button>
    </div>`).join('')}</div>`;
}

/* ══════════════════════════════════════════
   TRIP MODAL
══════════════════════════════════════════ */

function openModal()  { document.getElementById('modal-bg').classList.add('open'); }
function closeModal() { document.getElementById('modal-bg').classList.remove('open'); }

document.getElementById('modal-bg').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-bg')) closeModal();
});
document.getElementById('resto-modal-bg').addEventListener('click', e => {
  if (e.target === document.getElementById('resto-modal-bg')) closeRestoModal();
});

function saveTrip() {
  const dest = document.getElementById('f-dest').value.trim();
  const from = document.getElementById('f-from').value;
  const to   = document.getElementById('f-to').value;
  if (!dest || !from || !to) { toast('Fill in destination & dates'); return; }

  trips.push({
    id:     Date.now(),
    dest,
    flag:   document.getElementById('f-flag').value || '🌍',
    from, to,
    budget: Number(document.getElementById('f-budget').value) || 0,
    season: document.getElementById('f-season').value,
    notes:  document.getElementById('f-notes').value.trim(),
  });

  closeModal();
  ['f-dest','f-flag','f-from','f-to','f-budget','f-notes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('f-season').value = 'summer';

  renderTrips();
  renderHome();
  updateBadges();
  toast('Trip saved! ✈️');
}

function deleteTrip(id) {
  trips = trips.filter(t => t.id !== id);
  renderTrips();
  renderHome();
  updateBadges();
  toast('Removed');
}

/* ══════════════════════════════════════════
   RENDER TRIPS
══════════════════════════════════════════ */

const sFmt   = d => { if (!d) return '—'; const [y,m,day] = d.split('-'); const mn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return `${mn[+m-1]} ${+day}`; };
const sBadge = { spring:'teal', summer:'amber', autumn:'pink', winter:'blue' };

function renderTrips() {
  const list  = document.getElementById('trips-list');
  document.getElementById('trips-label').textContent = `${trips.length} trip${trips.length !== 1 ? 's' : ''} planned`;

  if (!trips.length) {
    list.innerHTML = `<div class="empty"><div class="empty-icon">✈️</div><div class="empty-title">No trips yet</div><div class="empty-sub">Start planning your European adventure together</div><button class="btn btn-primary" onclick="openModal()">Plan first trip</button></div>`;
    return;
  }

  const sorted    = [...trips].sort((a,b) => a.from.localeCompare(b.from));
  const today     = new Date().toISOString().split('T')[0];
  const maxBudget = Math.max(...trips.map(t => t.budget), 1);

  list.innerHTML = sorted.map(t => {
    const pct = Math.round((t.budget / maxBudget) * 100);
    return `<div class="trip-card">
      <div class="trip-top">
        <div class="trip-flag-name">
          <div class="trip-flag">${t.flag}</div>
          <div><div class="trip-name">${t.dest}</div><div class="trip-dates">${sFmt(t.from)} → ${sFmt(t.to)}</div></div>
        </div>
        <span class="badge badge-${sBadge[t.season]}">${t.season.charAt(0).toUpperCase() + t.season.slice(1)}</span>
      </div>
      <div class="trip-badges">
        ${t.budget ? `<span class="badge badge-green">£${t.budget.toLocaleString()}</span>` : ''}
        ${t.to < today ? '<span class="badge badge-accent">Done</span>' : t.from <= today && t.to >= today ? '<span class="badge badge-amber">Ongoing</span>' : ''}
      </div>
      ${t.notes ? `<div class="trip-notes">📝 ${t.notes}</div>` : ''}
      ${t.budget ? `<div class="budget-bar-wrap"><div class="budget-bar-label"><span>Budget</span><span>£${t.budget.toLocaleString()}</span></div><div class="budget-bar"><div class="budget-bar-fill" style="width:${pct}%"></div></div></div>` : ''}
      <div class="trip-actions" style="margin-top:10px;">
        <button class="btn btn-danger btn-sm" onclick="deleteTrip(${t.id})">Remove</button>
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   PACKING
══════════════════════════════════════════ */

function renderPack() {
  const body  = document.getElementById('pack-body');
  const total = Object.keys(packState).length;
  const done  = Object.values(packState).filter(Boolean).length;
  document.getElementById('pack-progress-text').textContent = `${done} / ${total} packed`;
  document.getElementById('pack-bar').style.width = `${Math.round(done / total * 100)}%`;

  body.innerHTML = Object.entries(PACK_ITEMS).map(([cat, items]) => `
    <div class="checklist-section">
      <div class="checklist-title"><span>${getCatIcon(cat)}</span>${cat}</div>
      ${items.map(item => `
        <div class="check-item" onclick="togglePack('${item.replace(/'/g, "\\'")}')">
          <div class="check-box ${packState[item] ? 'checked' : ''}">
            ${packState[item] ? `<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg>` : ''}
          </div>
          <span class="check-text ${packState[item] ? 'done' : ''}">${item}</span>
        </div>`).join('')}
    </div>`).join('');
}

function getCatIcon(cat) {
  const m = { 'Documents & Money':'📄','Clothes':'👕','Toiletries':'🧴','Tech & Gadgets':'📱','Health & Safety':'💊','Couple Essentials':'💑' };
  return m[cat] || '📦';
}

function togglePack(item) { packState[item] = !packState[item]; renderPack(); }
function resetPack() { Object.keys(packState).forEach(k => packState[k] = false); renderPack(); toast('Checklist reset'); }

/* ══════════════════════════════════════════
   HOME DASHBOARD
══════════════════════════════════════════ */

function renderHome() {
  const today = new Date().toISOString().split('T')[0];
  const next  = [...trips].sort((a,b) => a.from.localeCompare(b.from)).find(t => t.to >= today);
  const hero  = document.getElementById('hero-wrap');

  if (next) {
    const days = Math.max(0, Math.ceil((new Date(next.from) - new Date()) / 86400000));
    hero.innerHTML = `<div class="hero-card">
      <div class="hero-label">Next trip</div>
      <div style="font-size:28px;margin-bottom:4px;">${next.flag}</div>
      <div class="hero-dest">${next.dest}</div>
      <div class="hero-dates">${sFmt(next.from)} — ${sFmt(next.to)}</div>
      <div class="hero-countdown">${days === 0 ? 'Today!' : days + ' days'}</div>
      <div class="hero-countdown-label">${days === 0 ? 'Have fun! 🎉' : 'until departure'}</div>
    </div>`;
  } else {
    hero.innerHTML = `<div class="hero-card">
      <div class="hero-label">No upcoming trips</div>
      <div style="font-size:32px;margin-bottom:8px;">✈️</div>
      <div class="hero-dest">Plan your first trip</div>
      <div class="hero-dates">Tap + to get started</div>
    </div>`;
  }

  document.getElementById('s-trips').textContent     = trips.length;
  document.getElementById('s-wish').textContent      = wishlist.size;
  document.getElementById('s-countries').textContent = new Set(trips.map(t => t.dest.split(',').pop().trim())).size;
  document.getElementById('s-budget').textContent    = '£' + trips.reduce((s,t) => s + t.budget, 0).toLocaleString();

  // Budget chart
  const ctx = document.getElementById('budgetChart').getContext('2d');
  if (budgetChart) { budgetChart.destroy(); budgetChart = null; }
  if (trips.length) {
    const sorted = [...trips].sort((a,b) => a.from.localeCompare(b.from)).slice(0, 6);
    budgetChart  = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:   sorted.map(t => t.flag + ' ' + t.dest.split(',')[0]),
        datasets: [{ label: 'Budget', data: sorted.map(t => t.budget), backgroundColor: 'rgba(124,111,255,0.6)', borderColor: 'rgba(124,111,255,1)', borderWidth: 1, borderRadius: 6 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#4e4d5e', font: { size: 10 }, maxRotation: 20 }, grid: { display: false } },
          y: { ticks: { color: '#4e4d5e', font: { size: 10 }, callback: v => '£' + v }, grid: { color: 'rgba(255,255,255,0.04)' } }
        }
      }
    });
    document.getElementById('chart-legend').innerHTML = sorted.map(t => t.budget ? `<span style="display:flex;align-items:center;gap:4px;font-size:10px;color:#8b8a9a;">${t.flag} £${t.budget.toLocaleString()}</span>` : '').join('');
  } else {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.getElementById('chart-legend').innerHTML = '<span style="font-size:12px;color:var(--text3);">Add trips to see budget chart</span>';
  }

  // Wishlist preview
  const wp    = document.getElementById('dash-wish-preview');
  const items = [...wishlist].slice(0, 4).map(id => DESTS.find(d => d.id === id)).filter(Boolean);
  wp.innerHTML = items.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:6px;">${items.map(d => `<div style="display:flex;align-items:center;gap:5px;background:var(--bg3);border:1px solid var(--border);border-radius:999px;padding:4px 10px;"><span style="font-size:14px;">${d.flag}</span><span style="font-size:12px;">${d.name}</span></div>`).join('')}${wishlist.size > 4 ? `<div style="font-size:12px;color:var(--text3);display:flex;align-items:center;">+${wishlist.size - 4} more</div>` : ''}</div>`
    : '<div style="font-size:12px;color:var(--text2);">No destinations saved yet.</div>';

  // Recommended
  const recs = document.getElementById('dash-recs');
  recs.innerHTML = DESTS.filter(d => ['paris','interlaken','prague','amsterdam','oslo','barcelona'].includes(d.id)).map(d => `
    <div class="dest-mini ${wishlist.has(d.id) ? 'selected' : ''}" onclick="toggleWish('${d.id}');renderHome();">
      <div class="dest-mini-check"><svg class="mini-check-svg" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
      <div class="dest-mini-flag">${d.flag}</div>
      <div class="dest-mini-name">${d.name}</div>
      <div class="dest-mini-country">${d.country}</div>
      <div class="dest-mini-tags">${d.best.map(s => `<span class="dest-mini-tag">${s.charAt(0).toUpperCase() + s.slice(1)}</span>`).join('')}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   BADGES & TOAST
══════════════════════════════════════════ */

function updateBadges() {
  const bd = document.getElementById('badge-dest');
  const bt = document.getElementById('badge-trips');
  const bw = document.getElementById('badge-wish');
  if (wishlist.size > 0) { bd.style.display = 'flex'; bd.textContent = wishlist.size; } else bd.style.display = 'none';
  if (trips.length > 0)  { bt.style.display = 'flex'; bt.textContent = trips.length; } else bt.style.display = 'none';
  if (wishlist.size > 0) { bw.style.display = 'flex'; bw.textContent = wishlist.size; } else bw.style.display = 'none';
}

function toast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */

renderHome();
renderCountryList();
renderTrips();
renderPack();
updateBadges();
