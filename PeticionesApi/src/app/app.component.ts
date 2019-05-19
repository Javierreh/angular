import { Component } from '@angular/core';
import { SwService } from './sw.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	planetas: any[];
	url: string;
	nextUrl: string;

	min: number; 
	max: number; 

	constructor(private swService: SwService, private http: HttpClient) {
		this.url = "https://swapi.co/api/planets/?page=1&format=json"
	}

	ngOnInit() {
		// con observable
		// this.swService.getPlanets().subscribe((res) => {
		// 	this.planetas = res['results'];
		// });

		// con promesa
		// this.swService.getPlanetsPromise().then(res => {
		// 	console.log(res);
		// 	this.planetas = res['results'];
		// }).catch((err) => {
		// 	console.log(err);
		// });

		//mediante url
		this.swService.getPlanetsByUrl(this.url).subscribe((res) => {
			this.nextUrl = res['next'];
			this.planetas = res['results'];
		});
	}

	getNextPlanets() {
		this.swService.getPlanetsByUrl(this.nextUrl).subscribe((res) => {
			this.nextUrl = res['next'];
			this.planetas = res['results'];
		});
	}

	postRan() {
      this.swService.postRandom(this.max, this.min).subscribe((res) =>{
        console.log(res)
      })
    }

}
