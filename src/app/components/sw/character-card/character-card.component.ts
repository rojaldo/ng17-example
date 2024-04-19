import { Component, Input, OnChanges, OnInit, SimpleChanges, WritableSignal, computed, signal, effect } from '@angular/core';
import { Character } from '../../../models/character';
import { SWCharacter } from '../../../models/swcharacter';
import { count } from 'rxjs';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent implements OnChanges, OnInit {

  @Input() character: SWCharacter = new SWCharacter();

  
  myCharactermass!: WritableSignal<number>;
  myCharacterHeight!: WritableSignal<number>;
  massText: any = computed(() => 0);
  heightText: any = computed(() => 0);
  mass = 'mass';

  constructor() { 
    const myeffect = effect(() => {
      console.log(this.myCharactermass());
      this.mass = this.myCharactermass() + ' kg';
    });

  }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.myCharactermass = signal(this.character.mass);
    this.massText = computed(() => this.myCharactermass() + ' kg');
    this.myCharacterHeight = signal(this.character.height);
    // show height in forma x,yz m
    this.heightText = computed(() => Math.floor(this.myCharacterHeight()/100) + ',' + this.myCharacterHeight()%100 + ' m');
  }
}
