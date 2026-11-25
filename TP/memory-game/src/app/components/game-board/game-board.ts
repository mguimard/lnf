import { Component, inject, OnInit, signal } from '@angular/core';
import { BorderColor } from '../../directives/border-color';
import { Card } from '../../models/card';
import { Score } from '../../models/score';
import { DurationHumanReadablePipe } from '../../pipes/duration-human-readable-pipe';
import { Game } from '../../services/game';
import { ScoresService } from '../../services/scores-service';
import { CardItem } from '../card-item/card-item';

@Component({
  imports: [CardItem, BorderColor, DurationHumanReadablePipe],
  selector: 'app-game-board',
  styleUrl: './game-board.css',
  templateUrl: './game-board.html',
})
export class GameBoard implements OnInit {
  scoresService = inject(ScoresService);
  game = inject(Game);

  scores = signal<Score[]>([]);
  borderColor = 'orange';

  ngOnInit(): void {
    this.game.new();
    this.loadScores();
  }

  restart() {
    this.game.new();
  }

  async reveal(card: Card) {
    await this.game.reveal(card);

    if (this.game.gameOver()) {
      await this.addNewScore();
      await this.loadScores();
    }
  }

  async cheat() {
    this.game.revealAll();
    await this.addNewScore();
    await this.loadScores();
  }

  private async loadScores() {
    this.scores.set(await this.scoresService.getScores());
  }

  private async addNewScore() {
    await this.scoresService.addScore({
      timestamp: new Date(),
      duration_ms: this.game.time() * 1000,
      name: 'Joe',
    });
  }
}
