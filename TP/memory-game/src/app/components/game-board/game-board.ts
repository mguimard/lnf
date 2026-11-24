import { Component, OnInit, signal } from '@angular/core';
import { Card } from '../../card';
import { CardItem } from '../card-item/card-item';

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Component({
  imports: [CardItem],
  selector: 'app-game-board',
  styleUrl: './game-board.css',
  templateUrl: './game-board.html',
})
export class GameBoard implements OnInit {
  grid = signal<Card[]>([]);
  time = signal(0);
  counterId: number = 0;
  gameOver = signal(false);

  ngOnInit(): void {
    this.initGrid();
    this.initCounter();
  }

  private initGrid() {
    // génération de la grille

    const grid: Card[] = [];
    const logos = ['🚕', '🥝', '🐼', '🎯', '🐱', '🚀', '🎁', '🍎'];

    for (let i = 0; i < logos.length; i++) {
      grid.push({
        id: 1 + 2 * i,
        logo: logos[i],
        revealed: false,
        matched: false,
      });
      grid.push({
        id: 1 + (2 * i + 1),
        logo: logos[i],
        revealed: false,
        matched: false,
      });
    }

    this.grid.set(grid);
  }

  private initCounter() {
    // clear if already running
    if (this.counterId) {
      clearInterval(this.counterId);
    }

    this.time.set(0);

    // démarrage du compteur de temps
    this.counterId = setInterval(() => {
      this.time.set(this.time() + 1);
    }, 1000);
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

    let allRevealed = this.grid().every((card) => card.revealed);

    if (allRevealed) {
      this.stop();
    }
  }

  restart() {
    // reset grille + temps
    this.gameOver.set(false);
    this.initGrid();
    this.initCounter();
  }

  stop() {
    this.gameOver.set(true);
    if (this.counterId) {
      clearInterval(this.counterId);
    }
  }
}
