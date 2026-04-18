let wishlist=new Set(['paris']);
let trips=[];

const TABS=['home','dest','trips','wish','pack'];

function showTab(name){
  TABS.forEach(t=>{
    document.getElementById('panel-'+t)?.classList.toggle('active',t===name);
  });

  if(name==='dest') renderDestGrid();
}

function renderDestGrid(){
  const grid=document.getElementById('dest-grid');
  grid.innerHTML=DESTS.map(d=>`
    <div class="dest-card-full" onclick="showPlaces('${d.id}')">
      <div>${d.flag}</div>
      <div>${d.name}</div>
      <div>${d.country}</div>
    </div>
  `).join('');
}

function showPlaces(id){
  const places=PLACE_GUIDES[id]||[];
  const list=places.map(p=>`${p.icon} ${p.name} - ${p.note}`).join('\n');
  alert(list || 'No places yet');
}

renderDestGrid();
