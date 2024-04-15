import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apod-date-picker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: './apod-date-picker.component.html',
  styleUrl: './apod-date-picker.component.scss'
})
export class ApodDatePickerComponent {

  @Output() onDateChange = new EventEmitter<string>();

  dateObj: any = {year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDate()};

  handleChange() {
    const dateStr = `${this.dateObj.year}-${this.dateObj.month}-${this.dateObj.day}`;
    this.onDateChange.emit(dateStr);
  }

}
