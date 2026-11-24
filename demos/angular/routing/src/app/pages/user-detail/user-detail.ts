import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';

interface User {
  name: string;
}

@Component({
  imports: [],
  selector: 'app-user-detail',
  styleUrl: './user-detail.css',
  templateUrl: './user-detail.html',
})
export class UserDetail implements OnInit, OnDestroy {
  constructor() {
    console.log('new UserDetail');
  }

  ngOnInit(): void {
    console.log('init UserDetail');
  }

  ngOnDestroy(): void {
    console.log('destroy UserDetail');
  }

  http = inject(HttpClient);
  user = signal<User | null>(null);

  userId = input.required<number>();

  userChangeEffect = effect(() => {
    console.log('Changed:', this.userId());
    // requete HTTP ...
    this.user.set(null);
    this.http
      .get<User>(`https://jsonplaceholder.typicode.com/users/${this.userId()}`)
      .subscribe((data) => {
        this.user.set(data);
      });
  });
}
