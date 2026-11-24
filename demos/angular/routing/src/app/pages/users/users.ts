import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Popup } from '../../common/popup/popup';

@Component({
  imports: [Popup, RouterLink],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {}
