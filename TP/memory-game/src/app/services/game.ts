import { inject, Service, signal } from '@angular/core';
import { available_logos } from '../assets/logos';
import { Card } from '../models/card';
import { delay } from '../utils/delay';
import { SettingsService } from './settings-service';

@Service()
export class Game {
  settings = inject(SettingsService).settings;
  counterId: number = 0;

  grid = signal<Card[]>([]);
  time = signal(0);
  gameOver = signal(false);

  new() {
    this.gameOver.set(false);
    this.initGrid();
    this.initCounter();
  }

  initGrid() {
    const grid: Card[] = [];

    for (let i = 0; i < this.settings().pairs; i++) {
      grid.push(
        {
          id: 1 + 2 * i,
          logo: available_logos[i],
          revealed: false,
          matched: false,
        },
        {
          id: 1 + (2 * i + 1),
          logo: available_logos[i],
          revealed: false,
          matched: false,
        },
      );
    }

    this.grid.set(grid);
  }

  initCounter() {
    this.stopCounter();

    this.time.set(0);

    // démarrage du compteur de temps
    this.counterId = setInterval(() => {
      this.time.set(this.time() + 1);
    }, 1000);
  }

  revealAll() {
    this.grid.set(this.grid().map((c) => ({ ...c, revealed: true, matched: true })));
    this.checkGrid();
  }

  async reveal(card: Card) {
    // déja retournée
    if (card.revealed) {
      return;
    }

    const revealed = this.grid().filter((c) => c.revealed && !c.matched).length;

    if (revealed >= 2) {
      return;
    }

    if (revealed === 0) {
      card.revealed = true;
      return;
    }

    card.revealed = true;

    const revealedCards = this.grid().filter((c) => c.revealed && !c.matched);

    if (revealedCards[0].logo === revealedCards[1].logo) {
      revealedCards[0].matched = true;
      revealedCards[1].matched = true;
    } else {
      await delay(1000);
      revealedCards[0].revealed = false;
      revealedCards[1].revealed = false;
    }

    // update the grid signal
    this.grid.set(this.grid().map((c) => ({ ...c })));

    this.checkGrid();
  }

  private stopCounter() {
    if (this.counterId) {
      clearInterval(this.counterId);
    }
  }

  private checkGrid() {
    const allRevealed = this.grid().every((card) => card.revealed);

    if (allRevealed) {
      this.stopCounter();
      this.gameOver.set(true);
    }
  }
}
