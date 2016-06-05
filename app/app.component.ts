import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label>{{hero.id}}</div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="hero.name" placeholder="name">
		</div>
	`
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 11,
	name: 'Roseabell Tricker'
  };
  public heroes = HEROES;
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