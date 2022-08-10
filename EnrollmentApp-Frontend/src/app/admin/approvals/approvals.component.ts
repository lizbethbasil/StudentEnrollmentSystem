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
  
  approvestudent: EnrollModel[] | any;
  
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getEnrolledStudents().subscribe((data) => {
      this.approvestudent = JSON.parse(JSON.stringify(data));
      console.log(this.approvestudent);
    })
  }

  approveStudent() {}
  // Approve(student: any){ 
  //   this.approvestudent.status = 'approved';
  //   this.studentService.approve(this.approvestudent);
  //   alert("Approved!");
  //   console.log(this.approvestudent);
  //   this.router.navigate(['/students']);
  // }

}
