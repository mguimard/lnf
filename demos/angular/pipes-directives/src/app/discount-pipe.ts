import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  // inject possible

  transform(value: number, discount_value: number = 0.1, minimum_price: number = 100): number {
    return value > minimum_price ? value - value * discount_value : value;
  }
}
