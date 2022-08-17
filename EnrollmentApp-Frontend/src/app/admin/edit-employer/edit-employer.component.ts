import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EmployerModel } from '../employers/employer.model';
import { EmployerService } from '../../services/employer.service';
// import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']
})

export class EditEmployerComponent {
  title: String = "Edit Employer";
  
  // employer: EmployerModel[] | any;

  name: any = '';
  // email: any = '';
  // role: any = '';

  employer = (this.name);

  constructor(private employerService: EmployerService, private router:Router){ }

  ngOnInit(): void {
    let id = localStorage.getItem('editEmployer')
    this.employerService.getEmployer(id)
    .subscribe((data) => {
      this.employer = JSON.parse(JSON.stringify(data))
      console.log(this.employer);
    })
  }

  employerEdit(){
    console.log(this.employer);
    this.employerService.editEmployer(this.employer)
    .subscribe(
      response => {
        console.log("success");
        this.router.navigate(['/employers'])  
      },
      err=>{
        console.log("failed");
        alert("Update failed. Please try again later.")
      }
    ) 
  }  
  
}
