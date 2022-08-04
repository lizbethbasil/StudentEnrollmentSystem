import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user = {
    email: '',
    password: '',
    role: ''
  }

  login(){}

  constructor() { }

  ngOnInit(): void {
  }

}
