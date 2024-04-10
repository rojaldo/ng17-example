import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  @ViewChild('inputDisplay') inputDisplay!: HTMLInputElement;

  display = '';

  handleClick(value: number | string) {
    console.log('Button clicked!: ', this.inputDisplay);
    this.display += value;
    
    
  }
}
