import { SortPipe } from './sort-pipe';
interface Pizza {
  price: number;
  name: string;
}

let pizzas: Pizza[] = [
  { name: 'saumon', price: 11 },
  { name: 'chorizo', price: 12 },
];

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort the array', () => {
    const pipe = new SortPipe();
    let sorted = pipe.transform<Pizza>(pizzas, 'price', 'desc');
    expect(sorted).not.toBe(null);
    expect(sorted![0].name).toBe('chorizo');
  });

  it('should not modify the input', () => {
    const pipe = new SortPipe();
    pipe.transform<Pizza>(pizzas, 'price', 'desc');
    expect(pizzas[0].name).toBe('saumon');
  });
});
