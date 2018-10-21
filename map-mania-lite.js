    //Author:  Reina Irizarry
    //Class:   Web & Distributed Programming
    //Project: Map Mania v1
    //Session: su18-cpsc-24700-lt1
    //Description: This is the first version of Map Mania that I am creating for Programming Assignment 3. This is a spooky version of atlas obscura
//og
var gMap;

      // This example creates a simple polygon representing the Bermuda Triangle.

      function initMap() {
        var map = new google.maps.Map(document.getElementById('myMapID'), {
          zoom: 5,
          center: {lat: 24.886, lng: -70.268},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        // Define the LatLng coordinates for the polygon's path.
        var triangleCoords = [
          {lat: 25.774, lng: -80.190},
          {lat: 18.466, lng: -66.118},
          {lat: 32.321, lng: -64.757},
          {lat: 25.774, lng: -80.190}
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: triangleCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(map);
      }

var atlasObscura = [
    {content:"Crooked Forest,Poland", coordinates:{lat:53.213889,lng:14.475}, iconImagePath:"tree.png"},
    {content:"Witch House, Salem", coordinates:{lat:42.5215,lng:-70.8989}, iconImagePath:"house.png"},
    {content:"Bermuda Triangle,North Alanctic Ocean", coordinates:{lat:27.132481 ,lng:73.086548}, iconImagePath:"triangle.png"},//add polygon
    {content:"Pyramids of Giza, Egypt", coordinates:{lat:29.9792,lng:31.1342}, iconImagePath:"flag.png"},

];
var currentPlaceIndex = atlasObscura.length-1;
var currentPlace = atlasObscura[currentPlaceIndex];
var score = 10;


function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file.
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Salem witch house
    var marker2 = new google.maps.Marker({position:{lat:42.5215,lng:-70.8989}, map:gMap});

    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:  53.214311,lng:14.475698}, map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/tree.png');

    var marker2 = new google.maps.Marker({position:{lat:  29.9792,lng:31.1342}, map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/campground.png');

    var marker2 = new google.maps.Marker({position:{lat:  29.9792,lng:31.1342}, map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/campground.png');

    var infoWindow = new google.maps.InfoWindow({content:'Crooked Forest, Poland'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);

    });

    SetHint("Hint 1");
    SetScore(score);

    SetHint("Hint 2");
    SetScore(score);
}


function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Crooked Forest, Poland is in the currently displayed map
    if (gMap.getBounds().contains({lat:53.213889,lng:14.475})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;
    console.log('You are getting warmer!');
}

function SetScore() {
    document.getElementById("score-id").value = score;
}
