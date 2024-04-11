import { Component, EventEmitter, Output } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss'
})
export class KeyboardComponent {

  @Output() onButtonClick = new EventEmitter<number | string>();

  handleClick(value: number | string) {
    console.log(value);
    
    this.onButtonClick.emit(value);
  }
}
