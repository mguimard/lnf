import { Component } from '@angular/core';
import { GameBoard } from '../../components/game-board/game-board';

@Component({
  imports: [GameBoard],
  selector: 'app-game-page',
  styleUrl: './game-page.css',
  templateUrl: './game-page.html',
})
export class GamePage {}
