/* ===== DATA ===== */

const DESTS = [
  {id:'paris',flag:'🇫🇷',name:'Paris',country:'France',desc:'Cafés, art, and the Eiffel Tower at golden hour.',best:['spring','autumn'],tags:['Romantic','Art','Food'],color:'#ff6ba0'},
  {id:'rome',flag:'🇮🇹',name:'Rome',country:'Italy',desc:'Ancient ruins, gelato, and incredible pasta.',best:['spring','autumn'],tags:['History','Food','Architecture'],color:'#f5a923'},
  {id:'florence',flag:'🇮🇹',name:'Florence',country:'Italy',desc:'Renaissance art and Tuscan wine country.',best:['spring','autumn'],tags:['Art','Culture','Wine'],color:'#ff6b33'},
  {id:'venice',flag:'🇮🇹',name:'Venice',country:'Italy',desc:'Gondola rides through canals.',best:['spring','winter'],tags:['Romantic','Unique'],color:'#3b9fff'},
  {id:'zurich',flag:'🇨🇭',name:'Zürich',country:'Switzerland',desc:'Alpine lakes.',best:['summer','winter'],tags:['Luxury','Scenic'],color:'#a99fff'},
  {id:'interlaken',flag:'🇨🇭',name:'Interlaken',country:'Switzerland',desc:'Paragliding and lakes.',best:['summer','winter'],tags:['Adventure','Nature'],color:'#00d4aa'},
  {id:'oslo',flag:'🇳🇴',name:'Oslo',country:'Norway',desc:'Fjords and aurora.',best:['winter','summer'],tags:['Aurora','Fjords'],color:'#3b9fff'},
  {id:'stockholm',flag:'🇸🇪',name:'Stockholm',country:'Sweden',desc:'Old town and sailing.',best:['summer','spring'],tags:['Design','Charming'],color:'#ffd700'},
  {id:'copenhagen',flag:'🇩🇰',name:'Copenhagen',country:'Denmark',desc:'Hygge culture.',best:['summer','spring'],tags:['Food','Cozy'],color:'#ff6ba0'},
  {id:'amsterdam',flag:'🇳🇱',name:'Amsterdam',country:'Netherlands',desc:'Canals and tulips.',best:['spring','summer'],tags:['Canals','Art'],color:'#ff6b33'},
  {id:'barcelona',flag:'🇪🇸',name:'Barcelona',country:'Spain',desc:'Beaches and nightlife.',best:['spring','autumn'],tags:['Architecture','Beach'],color:'#f5a923'},
  {id:'prague',flag:'🇨🇿',name:'Prague',country:'Czech Republic',desc:'Fairy-tale city.',best:['spring','autumn'],tags:['Historic','Affordable'],color:'#9b8fff'}
];

const PACK_ITEMS = {
  'Documents & Money':['Passport','Visa','Insurance'],
  'Clothes':['T-shirt','Jacket','Shoes'],
  'Tech & Gadgets':['Phone','Charger','Adapter']
};

let wishlist = new Set(['paris','interlaken','oslo']);
let trips = [];
let packState = {};
let destFilter = 'all';
let budgetChart;

/* init */
Object.values(PACK_ITEMS).flat().forEach(i=>packState[i]=false);

/* ===== TAB ===== */

function showTab(tab){
  ['home','dest','trips','wish','pack'].forEach(t=>{
    document.getElementById('panel-'+t).classList.toggle('active',t===tab);
  });
}

/* ===== DEST ===== */

function renderDestGrid(){
  const el=document.getElementById('dest-grid');
  el.innerHTML = DESTS.map(d=>`
    <div onclick="toggleWish('${d.id}')">
      ${d.flag} ${d.name}
    </div>
  `).join('');
}

function toggleWish(id){
  wishlist.has(id)?wishlist.delete(id):wishlist.add(id);
  renderDestGrid();
}

/* ===== TRIPS ===== */

function saveTrip(){
  trips.push({
    id:Date.now(),
    dest:document.getElementById('f-dest').value,
    flag:document.getElementById('f-flag').value
  });
  closeModal();
  renderTrips();
}

function renderTrips(){
  document.getElementById('trips-list').innerHTML =
  trips.map(t=>`<div>${t.flag} ${t.dest}</div>`).join('');
}

/* ===== WISH ===== */

function renderWishlist(){
  document.getElementById('wish-list').innerHTML =
  [...wishlist].join(',');
}

/* ===== PACK ===== */

function renderPack(){
  document.getElementById('pack-body').innerHTML =
  Object.entries(PACK_ITEMS).map(([k,v])=>`<div>${k}</div>`).join('');
}

/* ===== HOME ===== */

function renderHome(){
  document.getElementById('s-trips').innerText=trips.length;
  document.getElementById('s-wish').innerText=wishlist.size;
}

/* ===== MODAL ===== */

function openModal(){document.getElementById('modal-bg').style.display='flex';}
function closeModal(){document.getElementById('modal-bg').style.display='none';}

/* INIT */
renderHome();
renderDestGrid();
