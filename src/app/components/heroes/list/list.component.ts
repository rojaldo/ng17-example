import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

   @Input() heroes: Character[] = [];

}
