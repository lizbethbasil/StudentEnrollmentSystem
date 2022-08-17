import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { EnrollModel } from './enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {

  title: String = "Course Enrollments";
  
  // approvalForm = new FormGroup({
  //   id: new FormControl(''),
  //   status: new FormControl('')
  // })
  
  student: EnrollModel[] | any;
  
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getEnrolledStudents().subscribe((data) => {
      this.student = JSON.parse(JSON.stringify(data));
      console.log(this.student);
    })
  }

  approveStudent(email: any){
    console.log(email);
   
    this.studentService.approve(email)
    .subscribe((data) => {
      console.log(data)     
      alert("approved")
      window.location.reload()
    })
  }

  viewStudent(student_id: any){ 
    localStorage.setItem('viewstudent', student_id);
    this.router.navigate(['student']);
  }

}
