import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { EnrollModel } from '../approvals/enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title: String = "Student Profiles";
  
  student: EnrollModel[] | any;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(public studentService: StudentService, public router: Router) { }

  ngOnInit(): void {
    this.studentService.getEnrolledStudents().subscribe((data) => {
      this.student = JSON.parse(JSON.stringify(data));
      console.log(this.student);
    })
  }

  viewStudent(student: any){ }
  
  editStudent(student: any){ }

  deleteStudent(student: any){ }

}
