import { Component, inject } from '@angular/core';
import { form, FormField, max, min } from '@angular/forms/signals';
import { available_logos } from '../../assets/logos';
import { SettingsService } from '../../services/settings-service';

@Component({
  imports: [FormField],
  selector: 'app-settings-page',
  styleUrl: './settings-page.css',
  templateUrl: './settings-page.html',
})
export class SettingsPage {
  service = inject(SettingsService);

  settingsForm = form(this.service.settings, (schema) => {
    min(schema.pairs, 1);
    max(schema.pairs, available_logos.length);
  });
}
