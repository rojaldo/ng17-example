import { Component, OnInit } from '@angular/core';
import { TrivialService } from '../../../services/trivial.service';
import { JsonPipe } from '@angular/common';
import { TrivialCard } from '../../../models/trivial';
import { TrivialCardComponent } from "../trivial-card/trivial-card.component";

@Component({
    selector: 'app-trivial',
    standalone: true,
    templateUrl: './trivial.component.html',
    styleUrl: './trivial.component.scss',
    imports: [JsonPipe, TrivialCardComponent]
})
export class TrivialComponent implements OnInit{

  cards: TrivialCard[] = [];
  score = 0;
  
    constructor(private service:TrivialService) { }

  ngOnInit(): void {
    this.service.getQuestions();
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
    });
  }

  handleAnswer(answer: boolean) {
    (answer) ? this.score += 2 : this.score -= 1;
  }

    

}
