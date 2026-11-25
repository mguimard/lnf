import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Score } from '../models/score';

//const URL = 'http://localhost:3000/scores';
const URL = `${environment.backend}/scores`;

@Service()
export class ScoresService {
  http = inject(HttpClient);

  async getScores(): Promise<Score[]> {
    return firstValueFrom(this.http.get<Score[]>(URL));
    // monde observable vers monde signal
    // toSignal(this.http.get<Score[]>(URL))
  }

  async addScore(score: Score): Promise<void> {
    return firstValueFrom(
      this.http.post<void>(URL, score, {
        headers: {
          authorization: 'whatever',
        },
      }),
    );
  }
}
