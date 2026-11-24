import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
  transform<T>(value: T[]): T[] {
    // fonctions pures, pas de transformation de l'input, toujours une copie !!!
    let copy = [...value];
    copy.sort();
    return copy;
  }
}
