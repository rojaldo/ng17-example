import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../../services/sw.service';
import { SWCharacter } from '../../../models/swcharacter';

@Component({
  selector: 'app-sw',
  standalone: true,
  imports: [],
  templateUrl: './sw.component.html',
  styleUrl: './sw.component.scss'
})
export class SwComponent implements OnInit {

  characters: SWCharacter[] = [];

  constructor(private service: StarWarsService) { }

  ngOnInit(): void {
    this.service.getCharacters();
    this.service.characters$.subscribe(characters => this.characters = characters);
  }

}
