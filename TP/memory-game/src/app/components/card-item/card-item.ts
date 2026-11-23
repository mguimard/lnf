import { Component, input } from '@angular/core';
import { Card } from '../../card';

@Component({
  imports: [],
  selector: 'app-card-item',
  styleUrl: './card-item.css',
  templateUrl: './card-item.html',
})
export class CardItem {
  card = input.required<Card>();
}
