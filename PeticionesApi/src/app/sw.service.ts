import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwService {

	constructor(private http: HttpClient) { }

	getPlanets() {
		return this.http.get('https://swapi.co/api/planets/?format=json');
	}

	getPlanetsPromise() {
		return this.http.get('https://swapi.co/api/planets/?format=json').toPromise();
	}

	getPlanetsByUrl(url) {
		return this.http.get(url);
	}

	postRandom(max, min) {
		return this.http.post('http://randomnum.ngrok.io/random/num', { max: 5, min: 2 });
	}

}
