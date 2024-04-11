import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../../models/character';
import { Hero } from '../../../models/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() onNewHero = new EventEmitter<Character>();
  heroName = '';
  heroDescription = '';

  addHero() {
    if (this.heroName === '') return;
    this.onNewHero.emit(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }
}
