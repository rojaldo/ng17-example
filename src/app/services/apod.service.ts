import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  apod!: any

  apod$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  getApod(){
    const observer = {
      next: (data: any) => {
        console.log(data);
        this.apod = data;
        this.apod$.next(this.apod);
      },
      error: (error: any) => {
        console.error(error);

      },
      complete: () => {
        console.log('Completed');
      }
    };
    if (this.apod || this.apod?.date === new Date().toISOString().split('T')[0]) 
      this.apod$.next(this.apod);
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(observer);
  }
}
