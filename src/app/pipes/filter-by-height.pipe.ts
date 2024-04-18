import { Pipe, PipeTransform } from '@angular/core';
import { SWCharacter } from '../models/swcharacter';
import { Observable, map } from 'rxjs';
import { log } from 'console';

@Pipe({
  name: 'filterByHeight',
  standalone: true,
  pure: true
})
export class FilterByHeightPipe implements PipeTransform {

  transform(value$: Observable<SWCharacter[]>, ...args: number[]): Observable<SWCharacter[]> {
    console.log('FilterByHeightPipe: transform: ' + args);
    
    if (!value$) {
      return value$;
    }
    if (!args || args.length !== 2) {
      return value$;
    }
    if (args.length === 2) {
      return value$.pipe(
        map (characters => characters.filter(character => character.height >= args[0] && character.height <= args[1]))
      );
    }
    return value$;
  }

}
