export class InMemoryDataService {
   createDb() {
      let heroes = [
         { "id": 11, "name": "Roseabell Tricker" },
         { "id": 12, "name": "Mr. Mister" },
         { "id": 13, "name": "Bluebell Bell" },
         { "id": 14, "name": "Bummo" },
         { "id": 15, "name": "Mommy-rific" },
         { "id": 16, "name": "Magenta E-Lee" },
         { "id": 17, "name": "Wonder Ainsley Girl" },
         { "id": 18, "name": "Rainbowiss Tricker" },
         { "id": 19, "name": "Bat-girl" },
         { "id": 20, "name": "Twister-Guy" }
      ];
      return { heroes };
   }
}