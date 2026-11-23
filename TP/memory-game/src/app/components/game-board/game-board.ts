import { Component, OnInit, signal } from '@angular/core';
import { Card } from '../../card';
import { CardItem } from '../card-item/card-item';

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

  reveal(card: Card) {
    card.revealed = true;
  }

  restart() {
    // reset grille + temps
    this.initGrid();
    this.initCounter();
  }
}
