// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhhMjQ2OCIsImEiOiJja2dvMmF2c2cwbnR1MnRwdHc1Y2tiZDhyIn0.JnBCJ-bz22pFEdGpUq1Vuw';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

// add layers
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
'Here is more data'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
var marker = new mapboxgl.Marker(el)
.setLngLat([-74.5, 40])
.setPopup(popup) // sets a popup on this marker
.addTo(map);
