import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from '../../../models/apod';
import { YouTubePlayer } from '@angular/youtube-player';

enum videoType {
  image = 'image',
  video = 'video'
}

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe, YouTubePlayer],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit{

  apod: Apod = new Apod();

  model!: NgbDateStruct;
	date!: { year: number; month: number };

  constructor(private service: ApodService) { }
  ngOnInit(): void {
    this.service.apod$.subscribe(apod => {
      this.apod = apod
    });
    this.service.getApod();
  }

  handleChange(value: any) {
    // transform the value to a string with the format 'YYYY-MM-DD'
    const valueString = `${value.year}-${value.month}-${value.day}`;
    this.service.getApod(valueString);
  }
    
}
