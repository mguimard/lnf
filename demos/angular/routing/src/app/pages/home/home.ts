import { Component } from '@angular/core';
import { LargeComponent } from '../../common/large-component/large-component';

@Component({
  imports: [LargeComponent],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
