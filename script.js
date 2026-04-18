const DESTS=[
  'Tech':['Phone charger']
};

let wishlist=new Set(['paris','interlaken']);
let trips=[];
let packState={};

Object.values(PACK_ITEMS).flat().forEach(i=>packState[i]=false);

const TABS=['home','dest','trips','wish','pack'];
function showTab(name){
  TABS.forEach(t=>{
    document.getElementById('panel-'+t).classList.toggle('active',t===name);
    document.getElementById('tab-'+t).classList.toggle('active',t===name);
  });
  if(name==='home')renderHome();
  if(name==='dest')renderDestGrid();
  if(name==='trips')renderTrips();
  if(name==='wish')renderWishlist();
  if(name==='pack')renderPack();
}

function renderDestGrid(){
  const grid=document.getElementById('dest-grid');
  grid.innerHTML=DESTS.map(d=>`<div class="dest-card-full" onclick="toggleWish('${d.id}')"><div>${d.flag}</div><div>${d.name}</div><div>${d.country}</div></div>`).join('');
}

function toggleWish(id){
  wishlist.has(id)?wishlist.delete(id):wishlist.add(id);
  renderDestGrid();
  renderWishlist();
  renderHome();
}

function renderWishlist(){
  const wrap=document.getElementById('wish-list');
  wrap.innerHTML=[...wishlist].map(id=>{
    const d=DESTS.find(x=>x.id===id);
    return `<div>${d.flag} ${d.name}</div>`;
  }).join('');
}

function openModal(){document.getElementById('modal-bg').classList.add('open');}
function closeModal(){document.getElementById('modal-bg').classList.remove('open');}

function saveTrip(){
  const dest=document.getElementById('f-dest').value;
  if(!dest)return;
  trips.push({dest,flag:document.getElementById('f-flag').value||'🌍'});
  closeModal();
  renderTrips();
  renderHome();
}

function renderTrips(){
  document.getElementById('trips-list').innerHTML=trips.map(t=>`<div>${t.flag} ${t.dest}</div>`).join('');
}

function renderPack(){
  document.getElementById('pack-body').innerHTML=Object.keys(packState).map(k=>`<div onclick="togglePack('${k}')">${packState[k]?'✅':'⬜'} ${k}</div>`).join('');
}

function togglePack(item){
  packState[item]=!packState[item];
  renderPack();
}

function renderHome(){
  document.getElementById('s-trips').textContent=trips.length;
  document.getElementById('s-wish').textContent=wishlist.size;
  document.getElementById('s-countries').textContent=wishlist.size;
  document.getElementById('s-budget').textContent='£0';

  document.getElementById('dash-recs').innerHTML=DESTS.map(d=>`<div class="dest-mini" onclick="toggleWish('${d.id}')">${d.flag} ${d.name}</div>`).join('');
}

function toast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}

renderHome();
renderDestGrid();
renderTrips();
renderWishlist();
renderPack();
