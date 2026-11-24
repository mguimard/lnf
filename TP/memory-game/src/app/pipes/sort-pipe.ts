import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform<T>(value: T[], key: keyof T, order: 'asc' | 'desc'): T[] {
    let copy = [...value];

    copy.sort((a: T, b: T) => {
      return order === 'asc' ? (a[key] > b[key] ? 1 : -1) : a[key] > b[key] ? -1 : 1;
    });

    return copy;
  }
}
