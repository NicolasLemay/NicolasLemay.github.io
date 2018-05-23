function fonctionCarte() {
    var mapCanvas = document.getElementById('carte');
    var mapOptions = {
        center: new google.maps.LatLng(46.05, -71.94),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
