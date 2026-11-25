import { effect, inject, Service, signal } from '@angular/core';
import { defaultSettings, Settings } from '../models/settings';
import { LocalStorageService } from './local-storage-service';

const storageKey = 'my-settings';

@Service()
export class SettingsService {
  storage = inject(LocalStorageService);
  settings = signal<Settings>(defaultSettings);

  autoWrite = effect(() => {
    this.storage.write(storageKey, this.settings());
  });

  constructor() {
    this.load();
  }

  private load() {
    let settings = this.storage.read<Settings>(storageKey, defaultSettings);
    this.settings.set(settings);
  }
}
