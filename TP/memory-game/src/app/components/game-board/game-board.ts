import { Component, inject, OnInit } from '@angular/core';
import { BorderColor } from '../../directives/border-color';
import { Card } from '../../models/card';
import { DurationHumanReadablePipe } from '../../pipes/duration-human-readable-pipe';
import { Game } from '../../services/game';
import { ScoresService } from '../../services/scores-service';
import { SettingsService } from '../../services/settings-service';
import { CardItem } from '../card-item/card-item';

@Component({
  imports: [CardItem, BorderColor, DurationHumanReadablePipe],
  selector: 'app-game-board',
  styleUrl: './game-board.css',
  templateUrl: './game-board.html',
})
export class GameBoard implements OnInit {
  scoresService = inject(ScoresService);
  settings = inject(SettingsService).settings;

  game = inject(Game);

  borderColor = this.settings().borderColor;

  ngOnInit(): void {
    this.game.new();
  }

  restart() {
    this.game.new();
  }

  async reveal(card: Card) {
    await this.game.reveal(card);

    if (this.game.gameOver()) {
      await this.addNewScore();
    }
  }

  async cheat() {
    this.game.revealAll();
    await this.addNewScore();
  }

  private async addNewScore() {
    await this.scoresService.addScore({
      timestamp: new Date(),
      duration_ms: this.game.time() * 1000,
      name: 'Joe',
    });
  }
}
