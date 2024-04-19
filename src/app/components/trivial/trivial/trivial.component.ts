import { Component, OnInit } from '@angular/core';
import { TrivialService } from '../../../services/trivial.service';
import { JsonPipe } from '@angular/common';
import { TrivialCard } from '../../../models/trivial';

@Component({
  selector: 'app-trivial',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './trivial.component.html',
  styleUrl: './trivial.component.scss'
})
export class TrivialComponent implements OnInit{

  cards: TrivialCard[] = [];
  
    constructor(private service:TrivialService) { }

  ngOnInit(): void {
    this.service.getQuestions();
    this.service.cards$.subscribe(cards => {
      this.cards = cards;
    });
  }

}
