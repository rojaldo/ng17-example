import { Pipe, PipeTransform } from '@angular/core';
import { SWCharacter } from '../models/swcharacter';
import { Observable, map, of } from 'rxjs';
import { SortSW } from '../enums/enum';
import { error } from 'console';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(characters$: Observable<SWCharacter[]>, ...args: SortSW[]): Observable<SWCharacter[]> {
    if (!characters$) {
      return of([]);
    }else if (!args || args.length === 0) {
      return characters$;
    }else if (args.length > 1) {
      console.warn('SortPipe: Too many arguments');
    }
    switch (args[0]) {
      case SortSW.NO_SORT:
        return (characters$);
      case SortSW.SORT_BY_HEIGHT_ASC:
        return characters$.pipe(map(characters => characters.sort((a, b) => a.height - b.height)));
      case SortSW.SORT_BY_HEIGHT_DESC:
        return characters$.pipe(map(characters => characters.sort((a, b) => b.height - a.height)));
      case SortSW.SORT_BY_MASS_ASC:
        return characters$.pipe(map(characters => characters.sort((a, b) => a.mass - b.mass)));
      case SortSW.SORT_BY_MASS_DESC:
        return characters$.pipe(map(characters => characters.sort((a, b) => b.mass - a.mass)));
      case SortSW.SORT_BY_NAME_ASC:
        return characters$.pipe(map(characters => characters.sort((a, b) => a.name.localeCompare(b.name))));
      case SortSW.SORT_BY_NAME_DESC:
        return characters$.pipe(map(characters => characters.sort((a, b) => b.name.localeCompare(a.name))));
      default:
        return characters$;
    }

  }

}
