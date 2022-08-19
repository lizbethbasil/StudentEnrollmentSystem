import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { AuthService } from '../../services/auth.service';
import { EnrollModel } from 'src/app/admin/approvals/enrollment.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminCheck: boolean= false;
  employerCheck: boolean= false;
  studentCheck: boolean = false;

  student: EnrollModel[] | any;

  constructor(private router: Router, private http: HttpClient, private studentService: StudentService, private authService: AuthService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('id')
    console.log(id);
    
    if(id){
      this.studentService.viewProfile(id)
        .subscribe(
          (response: any)=>{
            console.log(response);
            this.student = JSON.parse(JSON.stringify(response));
          }
        )
    }

    if(localStorage.getItem('role') == "admin"){
      this.adminCheck=true;
      console.log(this.adminCheck);
    }else if(localStorage.getItem('role') == "Employer"){
      this.employerCheck=true;
    }else if(localStorage.getItem('role') == "Student"){
      this.studentCheck=true;
    }else{
      console.log("logged out");
    }
    // window.location.reload()  
  }

  viewProfile(student: any){
    localStorage.setItem('viewstudent', student._id);
    this.router.navigate(['myprofile']);    
  }

  logoutUser(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('role');
    this.router.navigate([''])
      .then(() => {
        window.location.reload();  
      })
  }

}
