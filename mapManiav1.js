<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    Function initapplication(){
      console.log("Map Mania Lite - Starting");
    }
    Function SetHint(){
      document.getElementById("Hint Id");.value=hint;
      SetHint("Map being analitized");

    Function SetHint(){
      document.getElementById("Score");.value=Score;
      Score("Score");

     google.maps.event.addListener(GMAP,"idle", Function()){
       updateGame()
     }
   }

 };

 Function updateGame(){
   console.log("updateGame");
 }


    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
  </head>
  <body>
    <div id="map"></div>
    <script>
    var gmap;
      var map;
      function initMap() {
        gmap = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

      function initMap() {
        var myLatlng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'bounds_changed'

        });

        map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
      }

      function initMap() {
 var map = new google.maps.Map(document.getElementById('map'), {
   zoom: 4,
   center: {lat: -25.363882, lng: 131.044922 }
 });

 map.addListener('click', function(e) {
   placeMarkerAndPanTo(e.latLng, map);
 });
}

function placeMarkerAndPanTo(latLng, map) {
 var marker = new google.maps.Marker({
   position: latLng,
   map: map
 });
 map.panTo(latLng);
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -25.363882, lng: 131.044922 }
  });

  var bounds = {
    north: -25.363882,
    south: -31.203405,
    east: 131.044922,
    west: 125.244141
  };

  // Display the area between the location southWest and northEast.
  map.fitBounds(bounds);

  // Add 5 markers to map at random locations.
  // For each of these markers, give them a title with their index, and when
  // they are clicked they should open an infowindow with text from a secret
  // message.
  var secretMessages = ['This', 'is', 'the', 'secret', 'message'];
  var lngSpan = bounds.east - bounds.west;
  var latSpan = bounds.north - bounds.south;
  for (var i = 0; i < secretMessages.length; ++i) {
    var marker = new google.maps.Marker({
      position: {
        lat: bounds.south + latSpan * Math.random(),
        lng: bounds.west + lngSpan * Math.random()
      },
      map: map
    });
    attachSecretMessage(marker, secretMessages[i]);
  }
}

// Attaches an info window to a marker with the provided message. When the
// marker is clicked, the info window will open with the secret message.
function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

function initMap() {
  var originalMapCenter = new google.maps.LatLng(-25.363882, 131.044922);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: originalMapCenter
  });

  var infowindow = new google.maps.InfoWindow({
    content: 'Change the zoom level',
    position: originalMapCenter
  });
  infowindow.open(map);

  map.addListener('zoom_changed', function() {
    infowindow.setContent('Zoom: ' + map.getZoom());
  });
}


    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDVvbQ-oCG-89V-ko-xXvB_AO_xF_k0Nr4&callback=initMap"
    async defer></script>
  </body>
</html>
