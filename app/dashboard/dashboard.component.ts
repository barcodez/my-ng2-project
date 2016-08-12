import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero, HeroService } from '../heroes';

@Component({
   selector: "my-dashboard",
   templateUrl: "dashboard.component.html",
   styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent {
   heroes: Hero[] = [];
   constructor(
      private router: Router,
      private heroService: HeroService
   ) { }

   ngOnInit() {
      this.heroService.getHeroes()
         .then(heroes => this.heroes = heroes.slice(1, 5));
   }

   goToDetail(hero: Hero) {
      let link = ['HeroDetail', { id: hero.id }];
      this.router.navigate(link);
   }
}
