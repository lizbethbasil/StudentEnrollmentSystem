import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { EnrollModel } from '../../admin/approvals/enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  title: String = "My Profile";

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
