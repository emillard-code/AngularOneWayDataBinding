import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = {
    "id": 890,
    "name": "Adam",
    "email": "adam@gmail.com",
    "mobile": 123456789
  }

  constructor() { }

  ngOnInit() {
  }

}
