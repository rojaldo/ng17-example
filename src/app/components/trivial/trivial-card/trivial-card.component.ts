import { Component, Input } from '@angular/core';
import { TrivialCard } from '../../../models/trivial';

@Component({
  selector: 'app-trivial-card',
  standalone: true,
  imports: [],
  templateUrl: './trivial-card.component.html',
  styleUrl: './trivial-card.component.scss'
})
export class TrivialCardComponent {

  @Input() card!: TrivialCard;

  buttonClasses = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];


  checkAnswer(answer: string, index: number) {
    console.log(answer, index);
    this.card.isAnswered = true;

    this.buttonClasses.forEach((element, index) => {
      this.card.isCorrectAnswer(element) ? this.buttonClasses[index] = 'btn btn-success' : this.buttonClasses[index] = 'btn btn-secondary';
    });
    if (!this.card.isCorrectAnswer(answer)) {
      this.buttonClasses[index] = 'btn btn-danger';
    
    }
  }

}
