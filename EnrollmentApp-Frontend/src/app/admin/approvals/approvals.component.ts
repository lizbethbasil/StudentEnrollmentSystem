import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { EnrollModel } from './enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  title: String = "Course Enrollments";
  
  student: EnrollModel[] | any;
  
  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
    this.studentService.getEnrolledStudents().subscribe((data) => {
      this.student = JSON.parse(JSON.stringify(data));
      console.log(this.student);
    })
  }

  approveStudent(student: any){ }

}
