var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open("GET",'https://vzdijnk.azurewebsites.net/vzDijNK.json-' + pageCounter + '.json');//add the mustang my hhtps personal and heronames
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }

  };
