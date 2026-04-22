/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const COUNTRIES = [
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    seasonTip: '🍂 Sep: Fewer crowds, golden light, still warm ~22°C. Perfect for Paris!',
    places: [
      { name: 'Eiffel Tower',         image: 'images/eiffel.jpg',              place: 'Paris' },
      { name: 'Louvre Museum',         image: 'images/louvre.jpg',              place: 'Paris' },
      { name: 'Lafayette',             image: 'images/Lafayette.jpg',           place: 'Paris' },
      { name: 'Bourse de Commerce',    image: 'images/Bourse de Commerce.jpg',  place: 'Paris' },
      { name: 'Cafe de Flore',         image: 'images/Cafe de Flore.jpg',       place: 'Paris' },
      { name: 'Disneyland Paris',      image: 'images/Disneyland Paris.jpg',    place: 'Paris' },
      { name: 'Montmartre',            image: 'images/Montmartre.jpg',          place: 'Paris' },
    ],
    restaurants: [
      { name: 'Le Comptoir du Relais', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', city: 'Paris', cuisine: 'French Bistro', price: '££',  note: 'Classic bistro in Saint-Germain, queue early', tags: ['Bistro','Local','Lunch'], mapsUrl: 'https://maps.google.com/?q=Le+Comptoir+du+Relais+Paris' },
      { name: 'Septime',               image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80', city: 'Paris', cuisine: 'Modern French',  price: '£££', note: "Best neo-bistro in Paris — book weeks ahead",    tags: ['Fine Dining','Wine'],   mapsUrl: 'https://maps.google.com/?q=Septime+Paris' },
      { name: "L'As du Fallafel",      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80', city: 'Paris', cuisine: 'Middle Eastern', price: '£',   note: 'Legendary falafel in the Marais, always a queue', tags: ['Street Food','Quick','Cheap'], mapsUrl: "https://maps.google.com/?q=L'As+du+Fallafel+Paris" },
      { name: 'Breizh Café',           image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80', city: 'Paris', cuisine: 'Crêperie',       price: '££',  note: 'Best buckwheat galettes in Paris',              tags: ['Brunch','Casual'],      mapsUrl: 'https://maps.google.com/?q=Breizh+Cafe+Paris' },
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    seasonTip: '⭐ Sep: BEST month for Italy — summer crowds gone, ~26°C. Rome & Florence are stunning!',
    places: [
      { name: 'Duomo di Milano',               image: 'images/Duomo di Milano.jpg',              place: 'Milan'    },
      { name: 'Galleria Vittorio Emanuele II',  image: 'images/Galleria Vittorio Emanuele ll.jpg', place: 'Milan'    },
      { name: 'Colosseum',                     image: 'images/Colosseum.jpg',                    place: 'Rome'     },
      { name: 'Trastevere',                    image: 'images/Trastevere.jpg',                   place: 'Rome'     },
      { name: 'Palazzo Colonna',               image: 'images/Palazzo Colonna.jpg',              place: 'Rome'     },
      { name: 'Sistine Chapel',                image: 'images/Sistine Chapel.jpg',               place: 'Rome'     },
      { name: 'Vatican Museums',               image: 'images/Vatican Museums.jpg',              place: 'Vatican'  },
      { name: 'Pantheon',                      image: 'images/Pantheon.jpg',                     place: 'Vatican'  },
      { name: 'Lake Como',                     image: 'images/Lake Como.jpg',                    place: 'Lombardy' },
      { name: 'Uffizi Gallery',                image: '',                                        place: 'Florence' },
      { name: 'Ponte Vecchio',                 image: '',                                        place: 'Florence' },
      { name: 'Piazzale Michelangelo',         image: '',                                        place: 'Florence' },
      { name: 'Piazza della Signoria',         image: '',                                        place: 'Florence' },
      { name: 'Grand Canal',                   image: '',                                        place: 'Venice'   },
      { name: 'Rialto Bridge',                 image: '',                                        place: 'Venice'   },
      { name: "Doge's Palace",                 image: '',                                        place: 'Venice'   },
      { name: 'Murano Island',                 image: '',                                        place: 'Venice'   },
    ],
    restaurants: [
      { name: 'Trattoria da Enzo al 29', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80', city: 'Rome',     cuisine: 'Roman',           price: '££',  note: 'Soul of Roman cooking — cacio e pepe is unmissable', tags: ['Local','Must-try','Pasta'],       mapsUrl: 'https://maps.google.com/?q=Trattoria+da+Enzo+al+29+Rome' },
      { name: 'Pizzarium',               image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', city: 'Rome',     cuisine: 'Pizza al Taglio', price: '£',   note: "Bonci's legendary pizza near the Vatican",           tags: ['Pizza','Quick','Famous'],         mapsUrl: 'https://maps.google.com/?q=Pizzarium+Bonci+Rome' },
      { name: 'Gelateria dei Gracchi',   image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', city: 'Rome',     cuisine: 'Gelato',          price: '£',   note: 'Artisanal gelato — try pistachio & hazelnut',         tags: ['Dessert','Must-try'],             mapsUrl: 'https://maps.google.com/?q=Gelateria+dei+Gracchi+Rome' },
      { name: 'Buca Mario',              image: 'https://images.unsplash.com/photo-1544025162-d76538ef928b?w=400&q=80', city: 'Florence', cuisine: 'Tuscan',          price: '££',  note: "Florence's oldest restaurant — bistecca fiorentina",  tags: ['Historic','Steak','Local'],       mapsUrl: 'https://maps.google.com/?q=Buca+Mario+Florence' },
      { name: 'Mercato Centrale',        image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&q=80', city: 'Florence', cuisine: 'Food Market',     price: '£',   note: 'Two-floor food market — great for lunch & snacks',   tags: ['Market','Casual','Quick'],        mapsUrl: 'https://maps.google.com/?q=Mercato+Centrale+Florence' },
      { name: 'Osteria Alle Testiere',   image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80', city: 'Venice',   cuisine: 'Seafood',         price: '£££', note: 'Tiny gem in Venice — best seafood pasta, book ahead', tags: ['Seafood','Must-try','Romantic'],  mapsUrl: 'https://maps.google.com/?q=Osteria+Alle+Testiere+Venice' },
      { name: 'Luini',                   image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', city: 'Milan',    cuisine: 'Street Food',     price: '£',   note: 'Famous panzerotti spot right next to the Duomo',      tags: ['Street Food','Quick','Cheap'],    mapsUrl: 'https://maps.google.com/?q=Luini+Milan' },
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    seasonTip: '🏔 Sep: Alps still green, cable cars open, ~18°C in Interlaken. Great for hiking!',
    places: [
      { name: 'Jungfraujoch',    image: '', place: 'Interlaken' },
      { name: 'Lake Thun',       image: '', place: 'Interlaken' },
      { name: 'Old Town Zürich', image: '', place: 'Zürich'     },
      { name: 'Lake Zurich',     image: '', place: 'Zürich'     },
    ],
    restaurants: [
      { name: 'Zeughauskeller', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80', city: 'Zürich',     cuisine: 'Swiss',  price: '££', note: 'Traditional Swiss food in a historic beer hall', tags: ['Traditional','Fondue','Beer'], mapsUrl: 'https://maps.google.com/?q=Zeughauskeller+Zurich' },
      { name: 'Gasthof Hirschen',image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80', city: 'Interlaken', cuisine: 'Swiss',  price: '££', note: 'Cozy mountain fondue and raclette',              tags: ['Fondue','Cozy','Local'],       mapsUrl: 'https://maps.google.com/?q=Gasthof+Hirschen+Interlaken' },
    ]
  },
  {
    id: 'norway',
    name: 'Norway',
    flag: '🇳🇴',
    seasonTip: '🌅 Late Sep: Northern Lights start! Fjords gorgeous, ~12°C in Oslo.',
    places: [
      { name: 'Vigeland Park',    image: '', place: 'Oslo' },
      { name: 'Aker Brygge',      image: '', place: 'Oslo' },
      { name: 'Oslo Opera House', image: '', place: 'Oslo' },
      { name: 'Flåm Railway',     image: '', place: 'Flåm' },
    ],
    restaurants: [
      { name: 'Mathallen Oslo', image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&q=80', city: 'Oslo', cuisine: 'Food Hall', price: '££', note: "Oslo's best food market — try local vendors", tags: ['Market','Casual','Local'], mapsUrl: 'https://maps.google.com/?q=Mathallen+Oslo' },
    ]
  },
];

const DESTS = [
  { id:'rome',      flag:'🇮🇹', name:'Rome',      country:'Italy',          desc:'Ancient ruins, gelato & pasta — Sep is the absolute best time.',     best:['spring','autumn'], tags:['History','Food','Architecture'], color:'#f5a923', sepTip:'⭐ Best in Sep' },
  { id:'paris',     flag:'🇫🇷', name:'Paris',     country:'France',         desc:'Golden autumn light, fewer tourists, warm enough for café terraces.', best:['spring','autumn'], tags:['Romantic','Art','Food'],         color:'#ff6ba0', sepTip:'🍂 Great in Sep' },
  { id:'florence',  flag:'🇮🇹', name:'Florence',  country:'Italy',          desc:'Renaissance art & wine — Sep crowds are manageable and weather is perfect.', best:['spring','autumn'], tags:['Art','Culture','Wine'],   color:'#ff6b33', sepTip:'⭐ Best in Sep' },
  { id:'venice',    flag:'🇮🇹', name:'Venice',    country:'Italy',          desc:'Canal city at its best in Sep — summer tourists gone, still warm.',   best:['spring','autumn'], tags:['Romantic','Unique'],             color:'#3b9fff', sepTip:'✅ Good in Sep' },
  { id:'milan',     flag:'🇮🇹', name:'Milan',     country:'Italy',          desc:'Fashion, Duomo, and day trips to Lake Como.',                         best:['spring','autumn'], tags:['Fashion','Food','Design'],       color:'#a99fff', sepTip:'✅ Good in Sep' },
  { id:'barcelona', flag:'🇪🇸', name:'Barcelona', country:'Spain',          desc:'Still beach weather in Sep! Gaudí, tapas, and nightlife.',            best:['spring','autumn'], tags:['Architecture','Beach'],          color:'#f5a923', sepTip:'🌊 Beach weather!' },
  { id:'prague',    flag:'🇨🇿', name:'Prague',    country:'Czech Republic', desc:'Fairy-tale castle skyline on a budget — Sep is golden.',              best:['spring','autumn'], tags:['Historic','Affordable'],         color:'#9b8fff', sepTip:'🍂 Great in Sep' },
  { id:'zurich',    flag:'🇨🇭', name:'Zürich',   country:'Switzerland',    desc:'Alpine lakes framed by mountains — early Sep is ideal.',              best:['summer','winter'], tags:['Luxury','Scenic'],               color:'#a99fff', sepTip:'🏔 Early Sep ok' },
  { id:'interlaken',flag:'🇨🇭', name:'Interlaken',country:'Switzerland',   desc:'Paragliding, Jungfrau, and turquoise lakes.',                         best:['summer','winter'], tags:['Adventure','Nature'],            color:'#00d4aa', sepTip:'🏔 Early Sep ok' },
  { id:'oslo',      flag:'🇳🇴', name:'Oslo',      country:'Norway',         desc:'Fjords and Northern Lights start in late September.',                 best:['winter','summer'], tags:['Aurora','Fjords'],               color:'#3b9fff', sepTip:'🌌 Late Sep aurora' },
  { id:'amsterdam', flag:'🇳🇱', name:'Amsterdam', country:'Netherlands',   desc:'Tulip fields, canals, and world-class art.',                          best:['spring','summer'], tags:['Canals','Art'],                  color:'#ff6b33', sepTip:'' },
  { id:'stockholm', flag:'🇸🇪', name:'Stockholm', country:'Sweden',         desc:'Colorful old town and archipelago sailing.',                          best:['summer','spring'], tags:['Design','Charming'],             color:'#ffd700', sepTip:'' },
];

const PACK_ITEMS = {
  'Documents & Money': ['Passport','Schengen Visa (if needed)','Travel insurance','Credit & debit cards','Emergency cash (GBP + EUR)','Printed hotel & train bookings'],
  'Clothes':           ['T-shirts / tops (light — Italy is warm)','Trousers / jeans','Light jacket (Paris evenings cool)','Underwear & socks','Comfortable walking shoes','One smart outfit for dinner'],
  'Toiletries':        ['Toothbrush & toothpaste','Shampoo & conditioner','Deodorant','Sunscreen SPF50 (still needed in Sep)','Lip balm','Skincare essentials'],
  'Tech & Gadgets':    ['Phone + charger','Power bank','Universal adapter (EU Type C)','Earphones / AirPods','Camera','Download offline maps (Google Maps)'],
  'Health & Safety':   ['Paracetamol / ibuprofen','Allergy medication','Plasters / first aid','Hand sanitiser','EHIC / travel health card','Prescription meds'],
  'Couple Essentials': ['Matching outfit (optional 😄)','Neck pillow for trains','Snacks for long journeys','Journal / travel diary','Couple selfie poses list 📸','Portable charger for both phones'],
};

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */

let wishlist     = new Set(['rome', 'paris', 'florence']);
let trips        = [];
let packState    = {};
let budgetChart  = null;
let exploreLevel = 1;
let activeCountryId  = null;
let activeCityFilter = 'all';
let activeSeg        = 'places';

Object.entries(PACK_ITEMS).forEach(([, items]) => items.forEach(item => packState[item] = false));

/* ══════════════════════════════════════════
   TABS
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
  if (name === 'dest')  { if (exploreLevel === 1) renderCountryList(); updateExploreNav(); }
  if (name === 'home')  renderHome();
  if (name === 'trips') renderTrips();
  if (name === 'wish')  renderWishlist();
  if (name === 'pack')  renderPack();
}

/* ══════════════════════════════════════════
   EXPLORE LEVEL 1 — COUNTRIES
══════════════════════════════════════════ */

function renderCountryList() {
  const q    = (document.getElementById('country-search')?.value || '').toLowerCase();
  const list = document.getElementById('country-list');
  const data = COUNTRIES.filter(c => !q || c.name.toLowerCase().includes(q));
  list.innerHTML = data.map(c => {
    const cities = [...new Set(c.places.map(p => p.place))];
    return `
      <div class="country-card" onclick="openCountry('${c.id}')">
        <div class="country-flag">${c.flag}</div>
        <div class="country-info">
          <div class="country-name">${c.name}</div>
          <div class="country-meta">${cities.length} cities · ${c.places.length} places · ${(c.restaurants||[]).length} restaurants</div>
          ${c.seasonTip ? `<div class="country-sep-tip">${c.seasonTip}</div>` : ''}
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--text3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3l5 5-5 5"/></svg>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   EXPLORE LEVEL 2 — COUNTRY DETAIL
══════════════════════════════════════════ */

function openCountry(id) {
  activeCountryId = id; activeCityFilter = 'all'; activeSeg = 'places'; exploreLevel = 2;
  const country = COUNTRIES.find(c => c.id === id);
  document.getElementById('level-1').style.display = 'none';
  document.getElementById('level-2').style.display = 'block';
  document.getElementById('topbar-title').textContent = country.flag + ' ' + country.name;
  document.getElementById('topbar-sub').textContent   = 'Explore places & restaurants';
  document.getElementById('back-btn').classList.add('show');
  const cities = ['all', ...new Set(country.places.map(p => p.place))];
  document.getElementById('city-chips').innerHTML = cities.map(city => `
    <div class="city-chip ${city==='all'?'active':''}" onclick="setCityFilter(this,'${city}')">
      ${city==='all' ? '🗺 All' : city}
    </div>`).join('');
  document.getElementById('seg-places').classList.add('active');
  document.getElementById('seg-restaurants').classList.remove('active');
  document.getElementById('places-content').style.display      = 'block';
  document.getElementById('restaurants-content').style.display = 'none';
  renderPlaces(); renderRestaurants();
}

function goBack() {
  exploreLevel = 1; activeCountryId = null;
  document.getElementById('level-1').style.display = 'block';
  document.getElementById('level-2').style.display = 'none';
  document.getElementById('topbar-title').textContent = '✈ EuroTrip';
  document.getElementById('topbar-sub').textContent   = 'Bubuu🧸 & Bibii🐶 · UK Base';
  document.getElementById('back-btn').classList.remove('show');
  renderCountryList();
}

function updateExploreNav() {
  document.getElementById('back-btn').classList.toggle('show', exploreLevel === 2);
}

function setCityFilter(el, city) {
  activeCityFilter = city;
  document.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderPlaces(); renderRestaurants();
}

function setSeg(seg) {
  activeSeg = seg;
  document.getElementById('seg-places').classList.toggle('active', seg==='places');
  document.getElementById('seg-restaurants').classList.toggle('active', seg==='restaurants');
  document.getElementById('places-content').style.display      = seg==='places'      ? 'block' : 'none';
  document.getElementById('restaurants-content').style.display = seg==='restaurants' ? 'block' : 'none';
}

function renderPlaces() {
  const country  = COUNTRIES.find(c => c.id === activeCountryId); if (!country) return;
  const filtered = activeCityFilter==='all' ? country.places : country.places.filter(p => p.place===activeCityFilter);
  const grid     = document.getElementById('places-grid');
  if (!filtered.length) { grid.innerHTML=`<div class="empty" style="grid-column:1/-1;padding:28px 0;"><div class="empty-icon">📍</div><div style="font-size:13px;color:var(--text2);">No places yet.</div></div>`; return; }
  grid.innerHTML = filtered.map(p => `
    <div class="place-card">
      <div class="place-img-wrap">
        ${p.image
          ? `<img src="${p.image}" class="place-img" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\\'place-img-placeholder\\'>${country.flag}</div>'">`
          : `<div class="place-img-placeholder">${country.flag}</div>`}
      </div>
      <div class="place-info">
        <div class="place-name">${p.name}</div>
        <div class="place-city">${p.place}</div>
      </div>
    </div>`).join('');
}

function renderRestaurants() {
  const country  = COUNTRIES.find(c => c.id === activeCountryId); if (!country) return;
  const all      = country.restaurants || [];
  const filtered = activeCityFilter==='all' ? all : all.filter(r => r.city===activeCityFilter);
  const list     = document.getElementById('resto-list');
  if (!filtered.length) { list.innerHTML=`<div class="empty" style="padding:24px 0;"><div class="empty-icon">🍽</div><div style="font-size:13px;color:var(--text2);">No restaurants yet.<br>Add one below!</div></div>`; return; }
  list.innerHTML = filtered.map((r, i) => `
    <div class="resto-card">
      <div class="resto-img-wrap">
        ${r.photoDataUrl
          ? `<img src="${r.photoDataUrl}" class="resto-img" alt="${r.name}">`
          : r.image
            ? `<img src="${r.image}" class="resto-img" alt="${r.name}" onerror="this.style.display='none'">`
            : `<div class="resto-img-placeholder">🍽</div>`}
      </div>
      <div class="resto-body">
        <div class="resto-top-row">
          <div style="flex:1;min-width:0;">
            <div class="resto-name">${r.name}</div>
            <div class="resto-meta">${r.cuisine} · ${r.city}${r.custom?' · <span class="resto-custom-badge">You added</span>':''}</div>
          </div>
          <div class="resto-price">${r.price}</div>
        </div>
        ${r.note ? `<div class="resto-note">${r.note}</div>` : ''}
        <div class="resto-bottom-row">
          <div class="resto-tags">${(r.tags||[]).map(t=>`<span class="resto-tag">${t}</span>`).join('')}</div>
          <div style="display:flex;gap:5px;flex-shrink:0;">
            ${r.mapsUrl ? `<a href="${r.mapsUrl}" target="_blank" class="btn-maps">🗺 Maps</a>` : ''}
            ${r.custom  ? `<button class="btn btn-danger btn-sm" onclick="deleteResto('${activeCountryId}',${i})">✕</button>` : ''}
          </div>
        </div>
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   ADD RESTAURANT
══════════════════════════════════════════ */

function openRestoModal() {
  const country   = COUNTRIES.find(c => c.id === activeCountryId);
  const cityLabel = activeCityFilter==='all' ? country.name : `${activeCityFilter}, ${country.name}`;
  document.getElementById('resto-modal-sub').textContent = cityLabel;
  document.getElementById('resto-modal-bg').classList.add('open');
}
function closeRestoModal() { document.getElementById('resto-modal-bg').classList.remove('open'); }

function saveResto() {
  const name    = document.getElementById('r-name').value.trim();
  const cuisine = document.getElementById('r-cuisine').value.trim();
  const price   = document.getElementById('r-price').value;
  const note    = document.getElementById('r-note').value.trim();
  const mapsUrl = document.getElementById('r-maps').value.trim();
  const tagsRaw = document.getElementById('r-tags').value.trim();
  const file    = document.getElementById('r-photo').files[0];
  if (!name) { toast('Enter a restaurant name'); return; }

  const country = COUNTRIES.find(c => c.id === activeCountryId);
  if (!country.restaurants) country.restaurants = [];
  const city = activeCityFilter==='all' ? ([...new Set(country.places.map(p=>p.place))][0]||country.name) : activeCityFilter;
  const newR = { name, image:'', city, cuisine:cuisine||'Restaurant', price, note, mapsUrl:mapsUrl||'', tags:tagsRaw?tagsRaw.split(',').map(t=>t.trim()).filter(Boolean):[], custom:true };

  if (file) {
    const reader = new FileReader();
    reader.onload = e => { newR.photoDataUrl = e.target.result; country.restaurants.push(newR); _finishResto(); };
    reader.readAsDataURL(file);
  } else {
    country.restaurants.push(newR);
    _finishResto();
  }
}

function _finishResto() {
  closeRestoModal();
  ['r-name','r-cuisine','r-note','r-maps','r-tags'].forEach(id => document.getElementById(id).value='');
  document.getElementById('r-price').value = '££';
  document.getElementById('r-photo').value = '';
  const prev = document.getElementById('r-photo-preview');
  if (prev) { prev.style.display='none'; prev.src=''; }
  renderRestaurants();
  toast('Restaurant added! 🍽');
}

function deleteResto(countryId, idx) {
  const country  = COUNTRIES.find(c => c.id===countryId);
  const all      = country.restaurants||[];
  const filtered = activeCityFilter==='all' ? all : all.filter(r=>r.city===activeCityFilter);
  const target   = filtered[idx];
  if (!target) return;
  const gi = country.restaurants.indexOf(target);
  if (gi > -1) country.restaurants.splice(gi, 1);
  renderRestaurants(); toast('Removed');
}

/* ══════════════════════════════════════════
   WISHLIST
══════════════════════════════════════════ */

function toggleWish(id) { if (wishlist.has(id)) wishlist.delete(id); else wishlist.add(id); updateBadges(); }

function renderWishlist() {
  const wrap  = document.getElementById('wish-list');
  const items = [...wishlist].map(id => DESTS.find(d=>d.id===id)).filter(Boolean);
  if (!items.length) { wrap.innerHTML=`<div class="empty"><div class="empty-icon">💜</div><div class="empty-title">Nothing saved yet</div><div class="empty-sub">Browse Explore and tap destinations to save them</div><button class="btn btn-primary" onclick="showTab('dest')">Browse</button></div>`; return; }
  wrap.innerHTML = `<div class="wish-grid">${items.map(d=>`
    <div class="wish-card">
      <div class="wish-flag">${d.flag}</div>
      <div class="wish-info">
        <div class="wish-name">${d.name}</div>
        <div class="wish-country">${d.country}</div>
        ${d.sepTip?`<div class="wish-sep-tip">${d.sepTip}</div>`:''}
      </div>
      <button class="wish-rm" onclick="wishlist.delete('${d.id}');renderWishlist();updateBadges();">×</button>
    </div>`).join('')}</div>`;
}

/* ══════════════════════════════════════════
   TRIPS
══════════════════════════════════════════ */

function openModal()  { document.getElementById('modal-bg').classList.add('open'); }
function closeModal() { document.getElementById('modal-bg').classList.remove('open'); }

function saveTrip() {
  const dest = document.getElementById('f-dest').value.trim();
  const from = document.getElementById('f-from').value;
  const to   = document.getElementById('f-to').value;
  if (!dest||!from||!to) { toast('Fill in destination & dates'); return; }
  trips.push({ id:Date.now(), dest, flag:document.getElementById('f-flag').value||'🌍', from, to, budget:Number(document.getElementById('f-budget').value)||0, season:document.getElementById('f-season').value, notes:document.getElementById('f-notes').value.trim() });
  closeModal();
  ['f-dest','f-flag','f-from','f-to','f-budget','f-notes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-season').value='autumn';
  renderTrips(); renderHome(); updateBadges(); toast('Trip saved! ✈️');
}

function deleteTrip(id) { trips=trips.filter(t=>t.id!==id); renderTrips(); renderHome(); updateBadges(); toast('Removed'); }

const sFmt   = d => { if(!d)return'—'; const[y,m,day]=d.split('-'); const mn=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; return`${mn[+m-1]} ${+day}`; };
const sBadge = { spring:'teal',summer:'amber',autumn:'pink',winter:'blue' };

function renderTrips() {
  const list = document.getElementById('trips-list');
  document.getElementById('trips-label').textContent = `${trips.length} trip${trips.length!==1?'s':''} planned`;
  if (!trips.length) { list.innerHTML=`<div class="empty"><div class="empty-icon">✈️</div><div class="empty-title">No trips yet</div><div class="empty-sub">Start planning your European adventure together</div><button class="btn btn-primary" onclick="openModal()">Plan first trip</button></div>`; return; }
  const sorted    = [...trips].sort((a,b)=>a.from.localeCompare(b.from));
  const today     = new Date().toISOString().split('T')[0];
  const maxBudget = Math.max(...trips.map(t=>t.budget),1);
  list.innerHTML  = sorted.map(t => {
    const pct = Math.round((t.budget/maxBudget)*100);
    return `<div class="trip-card">
      <div class="trip-top">
        <div class="trip-flag-name"><div class="trip-flag">${t.flag}</div><div><div class="trip-name">${t.dest}</div><div class="trip-dates">${sFmt(t.from)} → ${sFmt(t.to)}</div></div></div>
        <span class="badge badge-${sBadge[t.season]}">${t.season.charAt(0).toUpperCase()+t.season.slice(1)}</span>
      </div>
      <div class="trip-badges">
        ${t.budget?`<span class="badge badge-green">£${t.budget.toLocaleString()}</span>`:''}
        ${t.to<today?'<span class="badge badge-accent">Done</span>':t.from<=today&&t.to>=today?'<span class="badge badge-amber">Ongoing</span>':''}
      </div>
      ${t.notes?`<div class="trip-notes">📝 ${t.notes}</div>`:''}
      ${t.budget?`<div class="budget-bar-wrap"><div class="budget-bar-label"><span>Budget</span><span>£${t.budget.toLocaleString()}</span></div><div class="budget-bar"><div class="budget-bar-fill" style="width:${pct}%"></div></div></div>`:''}
      <div class="trip-actions" style="margin-top:10px;"><button class="btn btn-danger btn-sm" onclick="deleteTrip(${t.id})">Remove</button></div>
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
  document.getElementById('pack-bar').style.width = `${Math.round(done/total*100)}%`;
  body.innerHTML = Object.entries(PACK_ITEMS).map(([cat,items])=>`
    <div class="checklist-section">
      <div class="checklist-title"><span>${getCatIcon(cat)}</span>${cat}</div>
      ${items.map(item=>`
        <div class="check-item" onclick="togglePack('${item.replace(/'/g,"\\'")}')">
          <div class="check-box ${packState[item]?'checked':''}">
            ${packState[item]?`<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,6 5,9 10,3"/></svg>`:''}
          </div>
          <span class="check-text ${packState[item]?'done':''}">${item}</span>
        </div>`).join('')}
    </div>`).join('');
}

function getCatIcon(cat) { return {'Documents & Money':'📄','Clothes':'👕','Toiletries':'🧴','Tech & Gadgets':'📱','Health & Safety':'💊','Couple Essentials':'💑'}[cat]||'📦'; }
function togglePack(item) { packState[item]=!packState[item]; renderPack(); }
function resetPack() { Object.keys(packState).forEach(k=>packState[k]=false); renderPack(); toast('Checklist reset'); }

/* ══════════════════════════════════════════
   HOME
══════════════════════════════════════════ */

function renderHome() {
  const today = new Date().toISOString().split('T')[0];
  const next  = [...trips].sort((a,b)=>a.from.localeCompare(b.from)).find(t=>t.to>=today);
  const hero  = document.getElementById('hero-wrap');

  if (next) {
    const days = Math.max(0,Math.ceil((new Date(next.from)-new Date())/86400000));
    hero.innerHTML = `<div class="hero-card">
      <div class="hero-label">Next trip</div>
      <div style="font-size:28px;margin-bottom:4px;">${next.flag}</div>
      <div class="hero-dest">${next.dest}</div>
      <div class="hero-dates">${sFmt(next.from)} — ${sFmt(next.to)}</div>
      <div class="hero-countdown">${days===0?'Today!':days+' days'}</div>
      <div class="hero-countdown-label">${days===0?'Have fun! 🎉':'until departure'}</div>
    </div>`;
  } else {
    hero.innerHTML = `<div class="hero-card">
      <div class="hero-label">✈ Upcoming · 4–11 September</div>
      <div style="font-size:28px;margin-bottom:4px;">🇮🇹🇫🇷</div>
      <div class="hero-dest">Italy + France</div>
      <div class="hero-dates">8 days · Early Autumn · Perfect weather 🍂</div>
      <button class="btn btn-primary btn-sm" style="margin-top:10px;" onclick="openModal()">+ Add this trip</button>
    </div>`;
  }

  document.getElementById('s-trips').textContent     = trips.length;
  document.getElementById('s-wish').textContent      = wishlist.size;
  document.getElementById('s-countries').textContent = new Set(trips.map(t=>t.dest.split(',').pop().trim())).size;
  document.getElementById('s-budget').textContent    = '£'+trips.reduce((s,t)=>s+t.budget,0).toLocaleString();

  const ctx = document.getElementById('budgetChart').getContext('2d');
  if (budgetChart) { budgetChart.destroy(); budgetChart=null; }
  if (trips.length) {
    const sorted = [...trips].sort((a,b)=>a.from.localeCompare(b.from)).slice(0,6);
    budgetChart  = new Chart(ctx,{ type:'bar', data:{ labels:sorted.map(t=>t.flag+' '+t.dest.split(',')[0]), datasets:[{ label:'Budget', data:sorted.map(t=>t.budget), backgroundColor:'rgba(124,111,255,0.6)', borderColor:'rgba(124,111,255,1)', borderWidth:1, borderRadius:6 }] }, options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ x:{ ticks:{ color:'#4e4d5e', font:{ size:10 }, maxRotation:20 }, grid:{ display:false } }, y:{ ticks:{ color:'#4e4d5e', font:{ size:10 }, callback:v=>'£'+v }, grid:{ color:'rgba(255,255,255,0.04)' } } } } });
    document.getElementById('chart-legend').innerHTML = sorted.map(t=>t.budget?`<span style="display:flex;align-items:center;gap:4px;font-size:10px;color:#8b8a9a;">${t.flag} £${t.budget.toLocaleString()}</span>`:'').join('');
  } else {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    document.getElementById('chart-legend').innerHTML='<span style="font-size:12px;color:var(--text3);">Add trips to see budget chart</span>';
  }

  const wp    = document.getElementById('dash-wish-preview');
  const items = [...wishlist].slice(0,4).map(id=>DESTS.find(d=>d.id===id)).filter(Boolean);
  wp.innerHTML = items.length ? `<div style="display:flex;flex-wrap:wrap;gap:6px;">${items.map(d=>`<div style="display:flex;align-items:center;gap:5px;background:var(--bg3);border:1px solid var(--border);border-radius:999px;padding:4px 10px;"><span style="font-size:14px;">${d.flag}</span><span style="font-size:12px;">${d.name}</span>${d.sepTip?`<span style="font-size:9px;color:var(--amber);margin-left:2px;">${d.sepTip}</span>`:''}</div>`).join('')}${wishlist.size>4?`<div style="font-size:12px;color:var(--text3);display:flex;align-items:center;">+${wishlist.size-4} more</div>`:''}</div>` : '<div style="font-size:12px;color:var(--text2);">No destinations saved yet.</div>';

  const recs = document.getElementById('dash-recs');
  recs.innerHTML = DESTS.filter(d=>['rome','paris','florence','venice','barcelona','prague'].includes(d.id)).map(d=>`
    <div class="dest-mini ${wishlist.has(d.id)?'selected':''}" onclick="toggleWish('${d.id}');renderHome();">
      <div class="dest-mini-check"><svg class="mini-check-svg" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
      <div class="dest-mini-flag">${d.flag}</div>
      <div class="dest-mini-name">${d.name}</div>
      <div class="dest-mini-country">${d.country}</div>
      ${d.sepTip?`<div class="dest-sep-tip">${d.sepTip}</div>`:''}
    </div>`).join('');
}

/* ══════════════════════════════════════════
   BADGES & TOAST
══════════════════════════════════════════ */

function updateBadges() {
  const bd=document.getElementById('badge-dest'), bt=document.getElementById('badge-trips'), bw=document.getElementById('badge-wish');
  if(wishlist.size>0){bd.style.display='flex';bd.textContent=wishlist.size;}else bd.style.display='none';
  if(trips.length>0){bt.style.display='flex';bt.textContent=trips.length;}else bt.style.display='none';
  if(wishlist.size>0){bw.style.display='flex';bw.textContent=wishlist.size;}else bw.style.display='none';
}

function toast(msg) { const t=document.getElementById('toast'); document.getElementById('toast-msg').textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('r-photo');
  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const prev = document.getElementById('r-photo-preview');
      const placeholder = document.getElementById('r-photo-placeholder');
      const reader = new FileReader();
      reader.onload = e => {
        if (prev) { prev.src=e.target.result; prev.style.display='block'; }
        if (placeholder) placeholder.style.display='none';
      };
      reader.readAsDataURL(file);
    });
  }
  document.getElementById('modal-bg').addEventListener('click', e => { if(e.target===document.getElementById('modal-bg'))closeModal(); });
  document.getElementById('resto-modal-bg').addEventListener('click', e => { if(e.target===document.getElementById('resto-modal-bg'))closeRestoModal(); });
});

renderHome();
renderCountryList();
renderTrips();
renderPack();
updateBadges();
