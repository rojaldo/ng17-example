import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { BehaviorSubject } from 'rxjs';
import { Villian } from '../models/villian';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Array<Character> = [
    new Hero('Superman', 'man of steel'),
    new Hero('Batman', 'dark knight'),
    new Villian('Joker', 'clown prince of crime')
  ]

  heroes$ = new BehaviorSubject<Array<Character>>(this._heroes);

  constructor() { }

  get heroes() {
    return this._heroes;
  }

  addHero(hero: Hero|Villian) {
    this._heroes.push(hero);
    this.heroes$.next(this._heroes);
  }
}
