import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero, HeroService } from '../hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'heroes-detail.component.html',
	styleUrls: ['heroes-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	@Output() close = new EventEmitter();
	error: any;
	navigated: boolean = false;  // true if navigated to here

	constructor(
		private heroService: HeroService,
		private routeParams: RouteParams
	) { }
	ngOnInit() {
		if (this.routeParams.get('id') !== null ) {
			let id = +this.routeParams.get('id');
			this.navigated = true;
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		} else {
			this.navigated = false;
			this.hero = new Hero(0, "", "");
		}
	}
	save(){
		this.heroService
			.save(this.hero)
			.then(hero => {
				this.hero = hero;  //saved heroes, w id if new
				this.goBack(hero);
			})
			.catch(error => this.error = error);   // TODO: Display an error message
	}
	goBack(savedHero: Hero = null) {
		this.close.emit(savedHero);
		if (this.navigated) { window.history.back(); }
	}
}
