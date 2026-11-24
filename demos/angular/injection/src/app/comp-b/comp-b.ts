import { Component, inject } from '@angular/core';
import { UsersService } from '../services/users-service';

@Component({
  imports: [],
  selector: 'app-comp-b',
  styleUrl: './comp-b.css',
  templateUrl: './comp-b.html',
  providers: [UsersService],
})
export class CompB {
  service = inject(UsersService);
}
