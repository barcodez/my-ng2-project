import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;
   addingHero: boolean;
   error: any;

	constructor(
		private router: Router,
		private heroService: HeroService
	) { }

	getHeroes() {
  		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  	}
	ngOnInit() {
		this.getHeroes();
  	}
  	onSelect(hero: Hero) {
  		this.selectedHero = hero;
  	}
	gotoDetail() {
		let link = ['HeroDetail', { id: this.selectedHero.id }];
		this.router.navigate(link);
	}
   addHero() {
      this.addingHero = true;
      this.selectedHero = null;
   }
   close(savedHero: Hero) {
      this.addingHero = false;
      if (savedHero) { this.getHeroes(); }
   }
   delete(hero: Hero, evt: any) {
      evt.stopPropagation();
      this.heroService.delete(hero)
         .then(res => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero == hero) {
               this.selectedHero = null;
            }
         })
         .catch(err => this.error = err);
   }
};
