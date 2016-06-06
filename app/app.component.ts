import {Component} from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
styles:[`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`],
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of heroes" 
		  	[class.selected]="hero === selectedHero"
		  	(click)="onSelect(hero)">
		    <!-- each hero goes here -->
		    <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
	directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'Tour of Heroes';
  public heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
};

var HEROES: Hero[] = [
  { "id": 11, "name": "Roseabell Tricker" },
  { "id": 12, "name": "Mr. Mister" },
  { "id": 13, "name": "Bluebell Bell" },
  { "id": 14, "name": "Bummo" },
  { "id": 15, "name": "Mommy-rific" },
  { "id": 16, "name": "Magenta E-Lee" },
  { "id": 17, "name": "Wonder Ainsley Girl" },
  { "id": 18, "name": "Rainbowiss Tricker" },
  { "id": 19, "name": "Bat-girl" },
  { "id": 20, "name": "Twister-Guy" },
];