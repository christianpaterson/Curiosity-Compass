function initializeMaps() {
  myMap();
  initMap();
}

function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(-37.067549, -12.310659),
    zoom: 5,
  };
  const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function initMap() {
  // Create a new map instance
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

// Ensure that the Google Maps API script has finished loading before calling map functions
window.addEventListener("load", function () {
  initializeMaps();
});