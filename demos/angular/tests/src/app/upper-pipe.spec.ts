import { UpperPipe } from './upper-pipe';

describe('UpperPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work', () => {
    const pipe = new UpperPipe();
    let input = 'alice';
    let result = pipe.transform(input);
    expect(result).toBe('ALICE');
  });

  it('should handle null values', () => {
    const pipe = new UpperPipe();
    let input = null;
    let result = pipe.transform(input);
    expect(result).toBe(null);
  });

  it('should not alter the input', () => {
    const pipe = new UpperPipe();
    let input = 'alice';
    pipe.transform(input);
    expect(input).toBe('alice');
  });
});
