// (function($, undefined) {
    
// })(jQwery);



$(document).ready(function() {
	var map;
  initMap();

});


// Инициализация Карты Google
function initMap() {

	var chernihiv = {lat: 51.493840, lng: 31.302110};
	
		map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: chernihiv,
		scrollwheel: false, // Отключить зум скролом
		mapTitleControl: false //убрать элементы выбора вида карты
	});

}	

  
// Функция построения маршрута
function drivingRoute(from, to) {
	var request = {
		origin: from,
		destination: to,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};

	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();

	directionsDisplay.setMap(map);
	directionsDisplay.setOptions( { suppressMarkers: true, suppressInfoWindows: true } );


	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
}


$('#drivingRoute').on('click', function(event) {
	drivingRoute( $('input[name=from]').val(), $('input[name=to]').val() );
});