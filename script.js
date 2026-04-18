const DESTS = [...]
const PLACE_GUIDES = {...}
const PACK_ITEMS = {...}

let wishlist = ...
let trips = ...
let packState = ...
let destFilter = ...
let budgetChart = ...

// tabs
function showTab(){...}

// explore
function renderDestGrid(){...}
function toggleWish(){...}
function setDestFilter(){...}
function clearSel(){...}
function saveWishlist(){...}

// places popup
function openPlacesModal(){...}
function closePlacesModal(){...}

// wishlist
function renderWishlist(){...}

// trips
function openModal(){...}
function closeModal(){...}
function saveTrip(){...}
function deleteTrip(){...}
function renderTrips(){...}

// pack
function renderPack(){...}
function togglePack(){...}
function resetPack(){...}

// home
function renderHome(){...}
function updateBadges(){...}
function toast(){...}

// init
renderHome();
renderDestGrid();
renderTrips();
renderPack();
updateBadges();
