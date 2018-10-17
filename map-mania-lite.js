    //Author:  Reina Irizarry
    //Class:   Web & Distributed Programming
    //Project: Map Mania v1
    //Session: su18-cpsc-24700-lt1
    //Description: This is the first version of Map Mania that I am creating for Programming Assignment 3. This is a spooky version of atlas obscura
//og
var gMap;

var atlasObscura = [
    {content:'Crooked Forest,Poland>', coordinates:{lat:53.213889,lng:14.475}, iconImagePath:"tree.png"},
    {content:'Witch House, Salem', coordinates:{lat:42.5215,lng:-70.8989}, iconImagePath:"house.png"},
    {content:'Bermuda Triangle,North Alanctic Ocean', coordinates:{lat:27.132481 ,lng:73.086548}, iconImagePath:"triangle.png"},//add polygon
    {content:'Pyramids of Giza, Egypt', coordinates:{lat:29.9792,lng:31.1342}, iconImagePath:"flag.png"},
    {content:'Prague, Czechia', coordinates:{lat:50.0755,lng:14.4378}, iconImagePath:"flag.png"},
    {content:'Nelson, New Zealand', coordinates:{lat:-41.2706,lng:173.2840}, iconImagePath:"flag.png"},
    {content:'Krakow, Poland', coordinates:{lat:50.0647,lng:19.9450}, iconImagePath:"flag.png"},
    {content:'Zakopane, Poland', coordinates:{lat:49.2992,lng:19.9496}, iconImagePath:"flag.png"},
    {content:'Canoe Bay, WI', coordinates:{lat:45.3306,lng:-91.4918}, iconImagePath:"flag.png"}
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


    var infoWindow = new google.maps.InfoWindow({content:'Crooked Forest, Poland'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);

    });

    SetHint("Hint 1");
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
}

function SetScore() {
    document.getElementById("score-id").value = score;
}
