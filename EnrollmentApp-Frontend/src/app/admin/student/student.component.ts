import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { EnrollModel } from '../approvals/enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  title: String = "Student Data";

  student: EnrollModel[] | any;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem('viewstudent');
    
    this.studentService.getStudent(id)
    .subscribe((data) => {
      this.student = [data];
      console.log(data);
    })
  }

}
