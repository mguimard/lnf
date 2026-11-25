import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

/*
Template driven forms
*/

@Component({
  imports: [FormsModule],
  selector: 'app-basic',
  styleUrl: './basic.css',
  templateUrl: './basic.html',
})
export class Basic {
  city = '';

  onSubmit(f: NgForm) {
    console.log(this.city);
    console.log(f);
  }
}
