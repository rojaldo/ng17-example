import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  apod!: Apod;

  apod$ = new BehaviorSubject<Apod>(this.apod);

  constructor(private http: HttpClient) { }

  getApod(dateString?: string){
    let url = 'https://api.nasa.gov/planetary/apod?'
    let apiKey = 'DEMO_KEY';
    url += `api_key=${apiKey}`; 
    dateString ? url += `&date=${dateString}` : '';
    const observer = {
      next: (data: any) => {
        console.log(data);
        this.apod = new Apod(data);
        this.apod$.next(this.apod);
      },
      error: (error: any) => {
        console.error(error);

      },
      complete: () => {
        console.log('Completed');
      }
    };
    // if (this.apod || this.apod?.date === new Date().toISOString().split('T')[0]) 
    //   this.apod$.next(this.apod);
    this.http.get(url).subscribe(observer);
  }
}
