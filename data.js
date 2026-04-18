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


let wishlist = new Set(['paris','interlaken','oslo']);
let trips = [];
let packState = {};
let destFilter = 'all';
let budgetChart = null;
