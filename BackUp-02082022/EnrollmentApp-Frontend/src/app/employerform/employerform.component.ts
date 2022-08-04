import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-employerform',
  templateUrl: './employerform.component.html',
  styleUrls: ['./employerform.component.css']
})
export class EmployerformComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    confirmpassword: new FormControl('', Validators.compose([Validators.required])),
    role: new FormControl('')
  })

  employerRegister(){ }
  
  constructor() { }

  ngOnInit(): void {
  }

}
