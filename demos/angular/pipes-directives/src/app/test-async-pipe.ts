import { Pipe, PipeTransform } from '@angular/core';

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Pipe({
  name: 'testAsync',
})
export class TestAsyncPipe implements PipeTransform {
  data: string | null = null;

  transform(value: string): string | null {
    return value + ' hello';
  }
}
