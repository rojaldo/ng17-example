import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onCardAnswered = new EventEmitter<boolean>();

  buttonClasses = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];


  checkAnswer(answer: string, index: number) {
    console.log(answer, index);
    this.card.isAnswered = true;

    // mark the correct answer with green and the rest with grey
    this.buttonClasses = ['btn btn-secondary', 'btn btn-secondary', 'btn btn-secondary', 'btn btn-secondary'];
    
    // mark the correct answer with green
    this.buttonClasses[this.card.correctAnswerIndex] = 'btn btn-success';

    if (!this.card.isCorrectAnswer(answer)) {
      this.buttonClasses[index] = 'btn btn-danger';
    
    }

    this.onCardAnswered.emit(this.card.isCorrectAnswer(answer));
  }

}
