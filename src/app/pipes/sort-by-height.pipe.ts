import { Pipe, PipeTransform } from '@angular/core';
import { SWCharacter } from '../models/swcharacter';
import { Observable, map, of } from 'rxjs';

@Pipe({
  name: 'sortByHeight',
  standalone: true
})
export class SortByHeightPipe implements PipeTransform {

  transform(characters: SWCharacter[], ...args: boolean[]): Observable<SWCharacter[]> {
    let characters$ = of(characters);
    if (args.length === 0) return characters$;
    if(args.length === 3){
      if(args[0] === true){
        return characters$.pipe(
          map(characters => characters.sort((a, b) => a.height - b.height))
        )
      }else if(args[1] === true){
        return characters$.pipe(
          map(characters => characters.sort((a, b) => a.mass - b.mass))
        )
      }
      else if(args[2] === true){
        return characters$.pipe(
          map(characters => characters.sort((a, b) => a.name.localeCompare(b.name)))
        )
      }  
    }
    return characters$;
  }

}
