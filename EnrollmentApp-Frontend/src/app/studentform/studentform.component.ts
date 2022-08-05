import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentModel } from './student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')])),
    confirmpassword: new FormControl('', Validators.compose([Validators.required]))
  })

  // onSubmit(value:any){
  //   console.log(value);
  // }
  
  addstudent = new StudentModel("", "", "");

  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
  }

  AddStudent() {
    this.studentService.addStudent(this.addstudent);
    alert("Sign Up Successful");
    // this.router.navigate(['/students']);
    this.router.navigate(['/']);
  }

}
