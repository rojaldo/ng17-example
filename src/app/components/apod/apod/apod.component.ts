import { AfterRenderPhase, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, afterNextRender, afterRender } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Apod } from '../../../models/apod';
import { YouTubePlayer } from '@angular/youtube-player';
import { ApodDatePickerComponent } from "../apod-date-picker/apod-date-picker.component";
import { ApodInfoComponent } from "../apod-info/apod-info.component";
import { log } from 'console';

enum videoType {
  image = 'image',
  video = 'video'
}

@Component({
    selector: 'app-apod',
    standalone: true,
    templateUrl: './apod.component.html',
    styleUrl: './apod.component.scss',
    imports: [FormsModule, JsonPipe, ApodDatePickerComponent, ApodInfoComponent]
})
export class ApodComponent implements OnInit, OnChanges, DoCheck, OnDestroy {


  dateStr = '';
  model!: NgbDateStruct;
	date!: { year: number; month: number };

  constructor() {
    // console.log('ApodComponent constructor');
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ApodComponent ngOnChanges');
    
  }
  ngOnInit(): void {
    // console.log('ApodComponent ngOnInit');
  }
  ngDoCheck(): void {
    // console.log('ApodComponent ngDoCheck');
  }
  ngOnDestroy(): void {
    // console.log('ApodComponent ngOnDestroy');
  }



  handleChange(value: any) {
    // transform the value to a string with the format 'YYYY-MM-DD'
    this.dateStr = value;
    console.log('ApodComponent handleChange: ' + this.dateStr);
    
  }
    
}
