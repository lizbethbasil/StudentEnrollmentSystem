import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentModel } from '../students/student.model';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  title: String = "New Student";
  addstudent = new StudentModel("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");

  constructor(public studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  AddStudent() {
    this.studentService.addStudent(this.addstudent);
    alert("New Student Added");
    this.router.navigate(['/students']);
  }

}
