import { Component, input, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dumb-component',
  styleUrl: './dumb-component.css',
  templateUrl: './dumb-component.html',
})
export class DumbComponent implements OnInit {
  data = input.required<string>();

  ngOnInit(): void {
    console.log('COMPONENT', this.data());
  }
}
