import { Component, ViewChild } from '@angular/core';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild('googleMap') divMap: any;
	map: any;
	markers: any[];

	constructor() {
		this.markers = [];
	}

	ngOnInit() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError);
		}
		else {
			console.log("Navegador sin soporte para la geolocalicación.");
		}
	}

	showPosition(position) {
		console.log(position);
		// console.log(this.divMap);

		let propsMap = {
			center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.HYBRID
		}

		this.map = new google.maps.Map(this.divMap.nativeElement, propsMap)

		let marker = new google.maps.Marker({
			position: propsMap.center,
			map: this.map,
			title: '¡¡Estamos aquí!!',
			animation: google.maps.Animation.DROP
		});

		this.markers.push(marker);

		google.maps.event.addListener(this.map, 'click', (event) => {
			let latM = event.latLng.lat();
			let lngM = event.latLng.lng();
			console.log(latM, lngM);

			let marker = new google.maps.Marker({
				position: new google.maps.LatLng(latM, lngM),
				map: this.map
			});

			this.markers.push(marker);

		});

		let input = document.getElementById('inputPlace');
		let autocomplete = new google.maps.places.Autocomplete(input);
		autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);
		
		autocomplete.addListener('place_changed', () => {

			let place = autocomplete.getPlace();
			console.log(place);

			this.map.setCenter(place.geometry.location);

			let marker = new google.maps.Marker({
				position: place.geometry.location,
				map: this.map

			});

		});

	}

	handleClick() {
		this.markers.map(marker => marker.setMap(null));
		this.markers = [];
		console.log(this.markers);
	}

	showError(error) {
		console.log(error.code);

		switch (error.code) {
			case error.PERMISSION_DENIED:
				console.log('El usuario no quiere ser localizado.');
				break;

			case error.POSITION_UNAVAILABLE:
				console.log('No se puede recuperar la posición.');
				break;

			case error.TIMEOUT:
				console.log('Se ha tardado mucho en recuperar la información.');
				break;

			case error.UNKNOWN_ERROR:
				console.log('Error desconocido.');
				break;
		}

	}

}
