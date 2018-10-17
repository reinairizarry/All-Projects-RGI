// add JSON
function initApllication(){
  console.log("Favorite Places is starting...");
  console.log(favoritePlaces);
  console.log(currentPlace);
  
}

function nextPlace(){
  currentPlaceIndex--;
  var currentPlace = favoritePlaces[currentPlaceIndex];
}
