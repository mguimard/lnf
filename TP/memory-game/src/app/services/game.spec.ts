import { TestBed } from '@angular/core/testing';
import { Game } from './game';

describe('Game', () => {
  let service: Game;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Game);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate the grid with 2 pairs', () => {
    let spy = vi.spyOn(service, 'settings');
    spy.mockReturnValue({ pairs: 2, borderColor: 'red' });
    service.initGrid();
    expect(spy).toHaveBeenCalled();
    expect(service.grid()).toHaveLength(4);
  });

  it('should register a timer id', () => {
    service.initCounter();
    expect(service.counterId).not.toBe(0);
    (service as any).stopCounter();
  });

  it('should reveal cards', () => {
    vi.spyOn(service, 'settings').mockReturnValue({ pairs: 2, borderColor: 'red' });
    service.initGrid();

    service.reveal(service.grid()[0]);
    expect(service.grid()[0].revealed).toBe(true);
    service.reveal(service.grid()[1]);
    expect(service.grid()[1].revealed).toBe(true);

    service.reveal(service.grid()[2]);
    expect(service.grid()[2].revealed).toBe(true);
    service.reveal(service.grid()[3]);
    expect(service.grid()[3].revealed).toBe(true);

    expect(service.gameOver()).toBe(true);
  });
});
