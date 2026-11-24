import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../classes/game';
import { UsersService } from '../services/users-service';
import { UsersV2Service } from '../services/users-v2-service';

@Component({
  imports: [],
  selector: 'app-comp-a',
  styleUrl: './comp-a.css',
  templateUrl: './comp-a.html',
  providers: [{ provide: UsersService, useClass: UsersV2Service }],
})
export class CompA implements OnInit {
  service = inject(UsersService);
  constructor() {}

  ngOnInit(): void {
    let g = new Game();
    console.log(g);
  }
}
