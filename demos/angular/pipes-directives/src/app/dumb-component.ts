import { Directive, input, OnInit } from '@angular/core';

@Directive({
  selector: '[app-dumb-component]',
})
export class DumbComponentDirective implements OnInit {
  data = input.required<string>();

  constructor() {
    console.log('DIRECTIVE');
  }

  ngOnInit(): void {
    console.log('DIRECTIVE', this.data());
  }
}
