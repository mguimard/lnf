import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';

//@Service()
// Singleton
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  storage = inject(StorageService);

  constructor() {
    console.log('new UsersService');
  }
}
