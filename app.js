const COUNTRIES = [

  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',

    places: [

      {
        name: 'Eiffel Tower',
        image: 'images/eiffel.jpg',
        price: 25,
        desc: 'Iconic tower in Paris'
      },

      {
        name: 'Louvre Museum',
        image: 'images/louvre.jpg',
        price: 17,
        desc: 'World famous museum'
      }

    ]
  },

  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',

    places: [

      {
        name: 'Colosseum',
        image: 'images/colosseum.jpg',
        price: 18,
        desc: 'Ancient Roman arena'
      },

      {
        name: 'Venice Canal',
        image: 'images/venice.jpg',
        price: 30,
        desc: 'Boat ride in Venice'
      }

    ]
  }

];
const DESTS=[
  {id:'paris',flag:'🇫🇷',name:'Paris',country:'France',desc:'Cafés, art, and the Eiffel Tower at golden hour.',best:['spring','autumn'],tags:['Romantic','Art','Food'],color:'#ff6ba0'},
  {id:'rome',flag:'🇮🇹',name:'Rome',country:'Italy',desc:'Ancient ruins, gelato, and incredible pasta.',best:['spring','autumn'],tags:['History','Food','Architecture'],color:'#f5a923'},
  {id:'florence',flag:'🇮🇹',name:'Florence',country:'Italy',desc:'Renaissance art and Tuscan wine country.',best:['spring','autumn'],tags:['Art','Culture','Wine'],color:'#ff6b33'},
  {id:'venice',flag:'🇮🇹',name:'Venice',country:'Italy',desc:'Gondola rides through winding canals.',best:['spring','winter'],tags:['Romantic','Unique'],color:'#3b9fff'},
  {id:'zurich',flag:'🇨🇭',name:'Zürich',country:'Switzerland',desc:'Alpine lakes framed by snowy mountains.',best:['summer','winter'],tags:['Luxury','Scenic'],color:'#a99fff'},
  {id:'interlaken',flag:'🇨🇭',name:'Interlaken',country:'Switzerland',desc:'Paragliding, Jungfrau, and turquoise lakes.',best:['summer','winter'],tags:['Adventure','Nature'],color:'#00d4aa'},
  {id:'oslo',flag:'🇳🇴',name:'Oslo',country:'Norway',desc:'Fjords and Northern Lights in winter.',best:['winter','summer'],tags:['Aurora','Fjords'],color:'#3b9fff'},
  {id:'stockholm',flag:'🇸🇪',name:'Stockholm',country:'Sweden',desc:'Colorful old town and archipelago sailing.',best:['summer','spring'],tags:['Design','Charming'],color:'#ffd700'},
  {id:'copenhagen',flag:'🇩🇰',name:'Copenhagen',country:'Denmark',desc:'Hygge culture and a top food scene.',best:['summer','spring'],tags:['Food','Cozy'],color:'#ff6ba0'},
  {id:'amsterdam',flag:'🇳🇱',name:'Amsterdam',country:'Netherlands',desc:'Tulip fields, canals, and world-class art.',best:['spring','summer'],tags:['Canals','Art'],color:'#ff6b33'},
  {id:'barcelona',flag:'🇪🇸',name:'Barcelona',country:'Spain',desc:'Gaudí, beaches, tapas, and nightlife.',best:['spring','autumn'],tags:['Architecture','Beach'],color:'#f5a923'},
  {id:'prague',flag:'🇨🇿',name:'Prague',country:'Czech Republic',desc:'Fairy-tale castle skyline on a budget.',best:['spring','autumn'],tags:['Historic','Affordable'],color:'#9b8fff'},
];

const PACK_ITEMS={
  'Documents & Money':['Passport','Visa / travel documents','Travel insurance','Credit & debit cards','Emergency cash (GBP + EUR)','Printed hotel bookings'],
  'Clothes':['T-shirts / tops','Trousers / jeans','Jacket or coat','Underwear & socks','Comfortable walking shoes','One smart outfit'],
  'Toiletries':['Toothbrush & toothpaste','Shampoo & conditioner','Deodorant','Sunscreen SPF50','Lip balm','Skincare essentials'],
  'Tech & Gadgets':['Phone + charger','Power bank','Universal adapter (EU plug)','Earphones','Camera','Download offline maps'],
  'Health & Safety':['Paracetamol / ibuprofen','Allergy medication','Plasters / first aid','Hand sanitiser','Face masks','Prescription meds'],
  'Couple Essentials':['Matching outfit (optional 😄)','Neck pillow for trains','Snacks for the journey','Journal / travel diary','Couple selfie poses list 📸'],
};

let wishlist=new Set(['paris','interlaken','oslo']);
let trips=[];
let packState={};
let destFilter='all';
let budgetChart=null;

// Init pack state
Object.entries(PACK_ITEMS).forEach(([cat,items])=>items.forEach(item=>packState[item]=false));

// TABS
const TABS=['home','dest','trips','wish','pack'];
function showTab(name){
  TABS.forEach(t=>{
    document.getElementById('panel-'+t).classList.toggle('active',t===name);
    const el=document.getElementById('tab-'+t);
    el.classList.toggle('active',t===name);
    const icon=el.querySelector('.tab-icon');
    const strokeColor=t===name?'var(--accent2)':'var(--text3)';
    icon.querySelectorAll('path,circle,rect,polyline').forEach(p=>p.setAttribute('stroke',strokeColor));
  });
  if(name==='home')renderHome();
  if(name==='dest')renderDestGrid();
  if(name==='trips')renderTrips();
  if(name==='wish')renderWishlist();
  if(name==='pack')renderPack();
}

// DESTINATIONS
function renderDestGrid(){
  const q=(document.getElementById('dest-search')?.value||'').toLowerCase();
  const grid=document.getElementById('dest-grid');
  const filtered=DESTS.filter(d=>{
    const mf=destFilter==='all'||d.best.includes(destFilter);
    const ms=!q||d.name.toLowerCase().includes(q)||d.country.toLowerCase().includes(q);
    return mf&&ms;
  });
  grid.innerHTML=filtered.map(d=>`
    <div class="dest-card-full ${wishlist.has(d.id)?'selected':''}" onclick="toggleWish('${d.id}')">
      <div class="dcf-check"><svg class="mini-check-svg" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
      <div class="dcf-flag">${d.flag}</div>
      <div class="dcf-name">${d.name}</div>
      <div class="dcf-country">${d.country}</div>
      <div class="dcf-desc">${d.desc}</div>
      <div class="dcf-tags">${d.best.map(s=>`<span class="dcf-tag">${s.charAt(0).toUpperCase()+s.slice(1)}</span>`).join('')}${d.tags.map(t=>`<span class="dcf-tag">${t}</span>`).join('')}</div>
      <div class="dcf-bar" style="background:${d.color}33;"></div>
    </div>`).join('');
}

function toggleWish(id){
  if(wishlist.has(id))wishlist.delete(id);else wishlist.add(id);
  renderDestGrid();
  updateBadges();
}
function setDestFilter(el,f){
  destFilter=f;
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.f===f));
  renderDestGrid();
}
function clearSel(){wishlist.clear();renderDestGrid();updateBadges();toast('Cleared');}
function saveWishlist(){updateBadges();renderHome();toast(wishlist.size+' destinations saved');}

// WISHLIST
function renderWishlist(){
  const wrap=document.getElementById('wish-list');
  const items=[...wishlist].map(id=>DESTS.find(d=>d.id===id)).filter(Boolean);
  if(!items.length){wrap.innerHTML=`<div class="empty"><div class="empty-icon">💜</div><div class="empty-title">Nothing saved yet</div><div class="empty-sub">Go to Explore and tap destinations to save them</div><button class="btn btn-primary" onclick="showTab('dest')">Browse destinations</button></div>`;return;}
  wrap.innerHTML=`<div class="wish-grid">${items.map(d=>`<div class="wish-card"><div class="wish-flag">${d.flag}</div><div class="wish-info"><div class="wish-name">${d.name}</div><div class="wish-country">${d.country}</div></div><button class="wish-rm" onclick="wishlist.delete('${d.id}');renderWishlist();updateBadges();">×</button></div>`).join('')}</div>`;
}

// TRIPS
function openModal(){document.getElementById('modal-bg').classList.add('open');}
function closeModal(){document.getElementById('modal-bg').classList.remove('open');}
document.getElementById('modal-bg').addEventListener('click',e=>{if(e.target===document.getElementById('modal-bg'))closeModal();});

function saveTrip(){
  const dest=document.getElementById('f-dest').value.trim();
  const from=document.getElementById('f-from').value;
  const to=document.getElementById('f-to').value;
  if(!dest||!from||!to){toast('Fill destination & dates');return;}
  trips.push({id:Date.now(),dest,flag:document.getElementById('f-flag').value||'🌍',from,to,budget:Number(document.getElementById('f-budget').value)||0,season:document.getElementById('f-season').value,notes:document.getElementById('f-notes').value.trim()});
  closeModal();
  ['f-dest','f-flag','f-from','f-to','f-budget','f-notes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('f-season').value='summer';
  renderTrips();renderHome();updateBadges();toast('Trip saved! ✈️');
}

function deleteTrip(id){trips=trips.filter(t=>t.id!==id);renderTrips();renderHome();updateBadges();toast('Removed');}

const sFmt=d=>{if(!d)return'—';const[y,m,day]=d.split('-');const mn=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return`${mn[+m-1]} ${+day}`;};
const sBadge={spring:'teal',summer:'amber',autumn:'pink',winter:'blue'};

function renderTrips(){
  const list=document.getElementById('trips-list');
  document.getElementById('trips-label').textContent=`${trips.length} trip${trips.length!==1?'s':''} planned`;
  if(!trips.length){list.innerHTML=`<div class="empty"><div class="empty-icon">✈️</div><div class="empty-title">No trips yet</div><div class="empty-sub">Start planning your European adventure together</div><button class="btn btn-primary" onclick="openModal()">Plan first trip</button></div>`;return;}
  const sorted=[...trips].sort((a,b)=>a.from.localeCompare(b.from));
  const today=new Date().toISOString().split('T')[0];
  const maxBudget=Math.max(...trips.map(t=>t.budget),1);
  list.innerHTML=sorted.map(t=>{
    const pct=Math.round((t.budget/maxBudget)*100);
    return`<div class="trip-card">
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
      <div class="trip-actions" style="margin-top:10px;">
        <button class="btn btn-danger btn-sm" onclick="deleteTrip(${t.id})">Remove</button>
      </div>
    </div>`;
  }).join('');
}

// PACKING
function renderPack(){
  const body=document.getElementById('pack-body');
  const total=Object.keys(packState).length;
  const done=Object.values(packState).filter(Boolean).length;
  document.getElementById('pack-progress-text').textContent=`${done} / ${total} packed`;
  document.getElementById('pack-bar').style.width=`${Math.round(done/total*100)}%`;
  body.innerHTML=Object.entries(PACK_ITEMS).map(([cat,items])=>`
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

function getCatIcon(cat){const m={'Documents & Money':'📄','Clothes':'👕','Toiletries':'🧴','Tech & Gadgets':'📱','Health & Safety':'💊','Couple Essentials':'💑'};return m[cat]||'📦';}

function togglePack(item){
  packState[item]=!packState[item];
  renderPack();
}
function resetPack(){Object.keys(packState).forEach(k=>packState[k]=false);renderPack();toast('Checklist reset');}

// HOME
function renderHome(){
  const today=new Date().toISOString().split('T')[0];
  const next=[...trips].sort((a,b)=>a.from.localeCompare(b.from)).find(t=>t.to>=today);
  const hero=document.getElementById('hero-wrap');
  if(next){
    const days=Math.max(0,Math.ceil((new Date(next.from)-new Date())/86400000));
    hero.innerHTML=`<div class="hero-card"><div class="hero-label">Next trip</div><div style="font-size:28px;margin-bottom:4px;">${next.flag}</div><div class="hero-dest">${next.dest}</div><div class="hero-dates">${sFmt(next.from)} — ${sFmt(next.to)}</div><div class="hero-countdown">${days===0?'Today!':days+' days'}</div><div class="hero-countdown-label">${days===0?'Have fun!':'until departure'}</div></div>`;
  } else {
    hero.innerHTML=`<div class="hero-card"><div class="hero-label">No upcoming trips</div><div style="font-size:32px;margin-bottom:8px;">✈️</div><div class="hero-dest">Plan your first trip</div><div class="hero-dates">Tap + to get started</div></div>`;
  }

  document.getElementById('s-trips').textContent=trips.length;
  document.getElementById('s-wish').textContent=wishlist.size;
  document.getElementById('s-countries').textContent=new Set(trips.map(t=>t.dest.split(',').pop().trim())).size;
  document.getElementById('s-budget').textContent='£'+trips.reduce((s,t)=>s+t.budget,0).toLocaleString();

  // Budget chart
  const ctx=document.getElementById('budgetChart').getContext('2d');
  if(budgetChart){budgetChart.destroy();budgetChart=null;}
  if(trips.length){
    const sorted=[...trips].sort((a,b)=>a.from.localeCompare(b.from)).slice(0,6);
    budgetChart=new Chart(ctx,{type:'bar',data:{labels:sorted.map(t=>t.flag+' '+t.dest.split(',')[0]),datasets:[{label:'Budget',data:sorted.map(t=>t.budget),backgroundColor:'rgba(124,111,255,0.6)',borderColor:'rgba(124,111,255,1)',borderWidth:1,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#4e4d5e',font:{size:10},maxRotation:20},grid:{display:false}},y:{ticks:{color:'#4e4d5e',font:{size:10},callback:v=>'£'+v},grid:{color:'rgba(255,255,255,0.04)'}}}}});
    document.getElementById('chart-legend').innerHTML=sorted.map(t=>t.budget?`<span style="display:flex;align-items:center;gap:4px;font-size:10px;color:#8b8a9a;">${t.flag} £${t.budget.toLocaleString()}</span>`:'').join('');
  } else {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    document.getElementById('chart-legend').innerHTML='<span style="font-size:12px;color:var(--text3);">Add trips to see budget chart</span>';
  }

  // Wishlist preview
  const wp=document.getElementById('dash-wish-preview');
  const items=[...wishlist].slice(0,4).map(id=>DESTS.find(d=>d.id===id)).filter(Boolean);
  wp.innerHTML=items.length?`<div style="display:flex;flex-wrap:wrap;gap:6px;">${items.map(d=>`<div style="display:flex;align-items:center;gap:5px;background:var(--bg3);border:1px solid var(--border);border-radius:999px;padding:4px 10px;"><span style="font-size:14px;">${d.flag}</span><span style="font-size:12px;">${d.name}</span></div>`).join('')}${wishlist.size>4?`<div style="font-size:12px;color:var(--text3);display:flex;align-items:center;">+${wishlist.size-4} more</div>`:''}</div>`:'<div style="font-size:12px;color:var(--text2);">No destinations saved yet.</div>';

  // Recs
  const recs=document.getElementById('dash-recs');
  recs.innerHTML=DESTS.filter(d=>['paris','interlaken','prague','amsterdam','oslo','barcelona'].includes(d.id)).map(d=>`
    <div class="dest-mini ${wishlist.has(d.id)?'selected':''}" onclick="toggleWish('${d.id}');renderHome();">
      <div class="dest-mini-check"><svg class="mini-check-svg" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></div>
      <div class="dest-mini-flag">${d.flag}</div>
      <div class="dest-mini-name">${d.name}</div>
      <div class="dest-mini-country">${d.country}</div>
      <div class="dest-mini-tags">${d.best.map(s=>`<span class="dest-mini-tag">${s.charAt(0).toUpperCase()+s.slice(1)}</span>`).join('')}</div>
    </div>`).join('');
}

function updateBadges(){
  const bd=document.getElementById('badge-dest');
  const bt=document.getElementById('badge-trips');
  const bw=document.getElementById('badge-wish');
  if(wishlist.size>0){bd.style.display='flex';bd.textContent=wishlist.size;}else bd.style.display='none';
  if(trips.length>0){bt.style.display='flex';bt.textContent=trips.length;}else bt.style.display='none';
  if(wishlist.size>0){bw.style.display='flex';bw.textContent=wishlist.size;}else bw.style.display='none';
}

function toast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

// INIT
init();
window.showTab = showTab;
renderHome();
renderDestGrid();
renderTrips();
renderPack();
updateBadges();
function renderCountryGrid() {

  const grid =
    document.getElementById('dest-grid');

  grid.innerHTML =
    COUNTRIES.map(c => `

      <div class="dest-card-full"
           onclick="openCountry('${c.id}')">

        <div style="font-size:28px;">
          ${c.flag}
        </div>

        <div>
          ${c.name}
        </div>

        <div>
          ${c.places.length} places
        </div>

      </div>

    `).join('');

}
function openCountry(id) {

  const country =
    COUNTRIES.find(c => c.id === id);

  const list =
    document.getElementById('place-list');

  list.innerHTML =
    country.places.map(p => `

      <div class="place-card">

        <img
          src="${p.image}"
          class="place-img"
        >

        <div class="place-name">
          ${p.name}
        </div>

        <div class="place-price">
          €${p.price}
        </div>

        <div>
          ${p.desc}
        </div>

      </div>

    `).join('');

  document
    .getElementById('country-modal')
    .classList.add('open');

}
function closeCountry() {

  document
    .getElementById('country-modal')
    .classList.remove('open');

}
if(name === 'dest')
  renderCountryGrid();
