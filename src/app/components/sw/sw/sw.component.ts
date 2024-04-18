import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../../services/sw.service';
import { SWCharacter } from '../../../models/swcharacter';
import { Observable, from, map, min, of, tap } from 'rxjs';
import { log } from 'console';
import { SortPipe } from "../../../pipes/sort-by.pipe";
import { AsyncPipe } from '@angular/common';
import { SortSW } from '../../../enums/enum';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { FilterByHeightPipe } from "../../../pipes/filter-by-height.pipe";

@Component({
    selector: 'app-sw',
    standalone: true,
    templateUrl: './sw.component.html',
    styleUrl: './sw.component.scss',
    imports: [SortPipe, AsyncPipe, NgbDropdownModule, NgxSliderModule, FilterByHeightPipe]
})
export class SwComponent implements OnInit {



  characters: SWCharacter[] = [];
  characters$ = new Observable<SWCharacter[]>();

  value: number = 140;
  highValue: number = 160;
  options = {
    floor: 0,
    ceil: 100,
  };

  sort = SortSW.NO_SORT;

  // array with sort length
  sortLength = Object.keys(SortSW).length / 2;
  sortArray: string[] = Object.values(SortSW);

  constructor(private service: StarWarsService) { }

  ngOnInit(): void {
    let mymin = 0;
    let mymax = 0;
    this.service.getCharacters();
    this.service.characters$.subscribe(characters => {
      this.characters = characters
      this.characters$ = of(characters);
      // get min and max values for height
      const heights = characters.map(character => character.height);
      of(heights).pipe(
        map(heights => Math.min(...heights)),        
      ).subscribe(
        (x) => {
          mymin = x
        }
      );
      of(heights).pipe(
        map(heights => Math.max(...heights)),
      ).subscribe(
        (x) => {
          mymax = x
        }
      );

      this.options = {
        floor: mymin,
        ceil: mymax,
      };

      this.value = mymin;
      this.highValue = mymax;
    });


  }

  sortBy(index: number) {
    switch (index) {
      case 0:
        this.sort = SortSW.NO_SORT;
        break;
      case 1:
        this.sort = SortSW.SORT_BY_HEIGHT_ASC;
        break;
      case 2:
        this.sort = SortSW.SORT_BY_HEIGHT_DESC;
        break;
      case 3:
        this.sort = SortSW.SORT_BY_MASS_ASC;
        break;
      case 4:
        this.sort = SortSW.SORT_BY_MASS_DESC;
        break;
      case 5:
        this.sort = SortSW.SORT_BY_NAME_ASC;
        break;
      case 6:
        this.sort = SortSW.SORT_BY_NAME_DESC;
        break;
      default:
        this.sort = SortSW.NO_SORT;
    }
    
  }

  handleChange(event: any) {
    console.log(event);
  }

}
