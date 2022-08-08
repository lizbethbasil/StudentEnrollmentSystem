import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  user = {email: '', password: '', role: ''}

  validateLogin(){    
    // var email = document.getElementById("email").value
    // var password = document.getElementById("password").value

    // var emailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    // var passwordformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    // if((email.trim() == '') || (!emailformat.test(email)))
    //   document.getElementById("email").style.border = "1px solid red"
    // else if((emailformat.test(email)) && (password.trim() == '') || (!passwordformat.test(password))){
    //   document.getElementById("email").style.border = "none"
    //   document.getElementById("password").style.border = "1px solid red"
    //   document.getElementById("password-status").innerHTML = "Password should have a minimum length of 8 characters, an uppercase, lowercase and a number"
    //   document.getElementById("password-status").style.color = "red"
    // }
    // else
    //   window.location = "https://lizbethbasil.github.io/keralatourism/index.html"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
