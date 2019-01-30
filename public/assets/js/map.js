var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(39.061910, -105.444330), // Colorado coordinates
  });
}

$(document).ready(function () {
  $.get("/api/sane_results").then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var coords = [data[i].latitude, data[i].longitude];
      var latLng = new google.maps.LatLng(coords[0], coords[1]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  });
})