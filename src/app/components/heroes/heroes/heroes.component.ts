import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../../../services/heroes.service';
import { Hero } from '../../../models/hero';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, JsonPipe, AsyncPipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  heroName = '';
  heroDescription = '';

  heroes$!: BehaviorSubject<Character[]>;



  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    // this.service.heroes$.subscribe(heroes => this.heroes = heroes);
    this.heroes$ = this.service.heroes$;
  }

  addHero() {
    if (this.heroName === '') return;
    this.service.addHero(new Hero (this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }

}
