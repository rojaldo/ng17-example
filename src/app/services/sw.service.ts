import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { Character } from '../models/character';
import { SWCharacter } from '../models/swcharacter';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {


  private _characters: SWCharacter[] = [];
  characters$ = new BehaviorSubject<SWCharacter[]>(this._characters); 

  constructor(private http: HttpClient) { }

  getCharacters() {
    const oberserver = {
      next: (response: any) => {
        response.results.forEach((element: any) => {
          this._characters.push(new SWCharacter(element));
        });
        this.characters$.next(this._characters);
      },
      error: (error: any) => {
        console.error('Error', error);
      },
      complete: () => {
        console.log('Complete');
      }
    };
    this.http.get('https://swapi.dev/api/people').subscribe(oberserver);
  }
}
