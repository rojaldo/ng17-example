import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../../services/sw.service';
import { SWCharacter } from '../../../models/swcharacter';
import { map, of } from 'rxjs';
import { log } from 'console';
import { SortByHeightPipe } from "../../../pipes/sort-by-height.pipe";
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-sw',
    standalone: true,
    templateUrl: './sw.component.html',
    styleUrl: './sw.component.scss',
    imports: [SortByHeightPipe, AsyncPipe]
})
export class SwComponent implements OnInit {

  characters: SWCharacter[] = [];

  constructor(private service: StarWarsService) { }

  ngOnInit(): void {
    this.service.getCharacters();
    this.service.characters$.subscribe(characters => this.characters = characters);
  }

  sortByHeight() {
    
    
    
  }

}
