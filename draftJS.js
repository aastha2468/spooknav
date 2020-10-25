// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
    "pk.eyJ1IjoiYWFzdGhhMjQ2OCIsImEiOiJja2dvMmF2c2cwbnR1MnRwdHc1Y2tiZDhyIn0.JnBCJ-bz22pFEdGpUq1Vuw";

var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-76.6122, 39.2904], // starting position [lng, lat]
  zoom: 15 // starting zoom
});

// add layers
var layerList = document.getElementById("menu");
var inputs = layerList.getElementsByTagName("input");

function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle("mapbox://styles/mapbox/" + layerId);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

d3.csv(
    "https://raw.githubusercontent.com/aastha2468/spooknav/main/finalDataTester.csv"
).then(function (data) {
  for (var i = 0; i < data.length; i++) {
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(data[i].String);
    // create DOM element for the marker
    var d = parseInt(data[i].danger);
    var el = document.createElement("div");
    if (d <= 4) {
      el.id = "marker1";
    } else if (d <= 6) {
      el.id = "marker2";
    } else {
      el.id = "marker3";
    }
    new mapboxgl.Marker(el)
        .setLngLat([data[i].longitude, data[i].latitude])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
  }
  console.log(data[3]); // [{"Hello": "world"}, …]
});
