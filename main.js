// Add JS here
var map = L.map('map', {
    zoomControl: false
  }).setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.control.zoom({
    position: 'bottomright'
  }).addTo(map);