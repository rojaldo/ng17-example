import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  model = new Hero('','');

  submitted = false;

  // pattern of spanish character min length 3 max length 20
  namePattern = '^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]{3,20}$';

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero('', '');
  }

}
