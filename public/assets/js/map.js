var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(39.061910, -105.444330), // Colorado coordinates
  });
}

$(document).ready(function () {
  
  $.get("/api/sane_results").then(function placemarker(data) {
    console.log(data);
    var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < data.length; i++) {
      var coords = [data[i].latitude, data[i].longitude];
      var latLng = new google.maps.LatLng(coords[0], coords[1]);

      var contentString = '<div>' +
        '<h2>' + data[i].facility + '</h2>' +
        '<div>' +
        '<p><b>Address:</b> ' + data[i].address + ', ' + data[i].city + ', ' + data[i].state + ', ' + data[i].zip + '</p>' +
        '<p><b>Phone number:</b> ' + data[i].phone_1 + '</p>' +
        '<p><b>Website:</b> <a href="' + data[i].website + '" target ="_blank">' + data[i].website + '</a>' +
        '<p><b>Additional Information</b> <br>' + 
        data[i].additional_info + '</p>' +
        '</div>' +
        '</div>';

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: data[i].facility,
        info: contentString
      });

      marker.addListener('click', function () {
        infowindow.close();
        infowindow.setContent(this.info);
        infowindow.open(map, this);
      });
    }
  });
})