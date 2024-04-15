import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Apod } from '../../../models/apod';
import { YouTubePlayer } from '@angular/youtube-player';
import { ApodService } from '../../../services/apod.service';
import { log } from 'console';

@Component({
  selector: 'app-apod-info',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './apod-info.component.html',
  styleUrl: './apod-info.component.scss'
})
export class ApodInfoComponent implements OnInit, OnChanges{


  @Input() date: string = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
  apod: Apod = new Apod();

  constructor(private service: ApodService) {
    console.log('ApodInfoComponent constructor');
    
  }

  ngOnInit(): void {
    this.service.getApod(this.date);
    this.service.apod$.subscribe(apod => this.apod = apod);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ApodInfoComponent ngOnChanges: ' + JSON.stringify(changes));
    if (changes['date'].currentValue !== changes['date'].previousValue && changes['date'].firstChange === false) {
      this.service.getApod(this.date);
    }
    
  }

}
