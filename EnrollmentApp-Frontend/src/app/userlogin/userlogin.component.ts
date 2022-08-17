import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  title: String = 'Welcome User';
  
  user = {
    email: '', 
    password: '', 
    role: ''
  }

  validateLogin(){    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
