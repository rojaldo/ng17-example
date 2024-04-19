import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TrivialCard } from '../models/trivial';
import { getPrototype } from '../models/prototype';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  cards: TrivialCard[] = [];
  cards$ = new BehaviorSubject<TrivialCard[]>(this.cards);

  constructor(private http: HttpClient) { }

  getQuestions() {
    const observer = {
      next: (data: any) => {
        this.cards = data.results.map((result: any) => new TrivialCard(result));
        this.cards$.next(this.cards);
        console.log(data);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Completed');
      }
    };
    this.http.get('https://www.otriviata.com/api.php?amount=10').subscribe(observer);
  }
}
