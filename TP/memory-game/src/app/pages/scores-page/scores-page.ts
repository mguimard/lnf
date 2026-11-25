import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DurationHumanReadablePipe } from '../../pipes/duration-human-readable-pipe';
import { SortPipe } from '../../pipes/sort-pipe';
import { ScoresService } from '../../services/scores-service';

@Component({
  imports: [DurationHumanReadablePipe, SortPipe, DatePipe, AsyncPipe],
  selector: 'app-scores-page',
  styleUrl: './scores-page.css',
  templateUrl: './scores-page.html',
})
export class ScoresPage {
  scores = inject(ScoresService).getScores();
}
