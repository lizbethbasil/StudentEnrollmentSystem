import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  title: String = "Edit Profile";
  
  address: any = '';
  qualification: any = '';
  passout: any = '';
  skillset: any = '';
  technologyTraining: any = '';
  year: any = '';

  student = (this.address, this.qualification, this.passout, this.skillset, this.technologyTraining, this.year);

  adminCheck: boolean= false;
  employerCheck: boolean= false;
  studentCheck: boolean = false;

  constructor(private studentService: StudentService, private notifyService: NotificationService, 
    private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('editStudent');
    this.studentService.editProfile(id)
    .subscribe((data) => {
      this.student = JSON.parse(JSON.stringify(data))
      console.log(this.student);
    });

    if(localStorage.getItem('role') == "admin"){
      this.adminCheck=true;
      console.log(this.adminCheck)
    }else if(localStorage.getItem('role') == "Employer"){
      this.employerCheck=true;
    }else if(localStorage.getItem('role') == "Student"){
      this.studentCheck=true;
    }else{
      console.log("user logged out")
    }
  }

  profileEdit(){
    console.log(this.student);
    this.studentService.editProfile(this.student)
    .subscribe(
      response => {
        console.log("success");
        this.router.navigate(['myprofile'])  
      },
      err=>{
        console.log("failed");
        // alert("Update failed. Please try again later.");
        this.notifyService.showDanger(
          'Update failed. Please try again later.'
        );
      }
    ) 
  }

}
