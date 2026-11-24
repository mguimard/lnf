import { DurationHumanReadablePipe } from './duration-human-readable-pipe';

describe('DurationHumanReadablePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationHumanReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
