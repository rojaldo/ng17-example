import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../../../services/heroes.service';
import { Hero } from '../../../models/hero';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../../../models/character';
import { ListComponent } from "../list/list.component";
import { log } from 'console';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-heroes',
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.scss',
    imports: [FormsModule, JsonPipe, AsyncPipe, ListComponent, FormComponent]
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];


  // heroes$!: BehaviorSubject<Character[]>;



  constructor(private service: HeroesService) { }

  ngOnInit(): void {
    this.service.heroes$.subscribe(heroes => {
      this.heroes = heroes
    });
    // this.heroes$ = this.service.heroes$;
  }

  addHero(hero: any) {
    this.service.addHero(hero);
  }

}
