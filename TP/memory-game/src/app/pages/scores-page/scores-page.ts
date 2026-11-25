import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Score } from '../../models/score';
import { DurationHumanReadablePipe } from '../../pipes/duration-human-readable-pipe';
import { SortPipe } from '../../pipes/sort-pipe';
import { ScoresService } from '../../services/scores-service';

@Component({
  imports: [DurationHumanReadablePipe, SortPipe, DatePipe],
  selector: 'app-scores-page',
  styleUrl: './scores-page.css',
  templateUrl: './scores-page.html',
})
export class ScoresPage implements OnInit {
  service = inject(ScoresService);
  scores = signal<Score[]>([]);

  async ngOnInit() {
    this.scores.set(await this.service.getScores());
  }
}
