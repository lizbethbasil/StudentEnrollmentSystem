import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../services/employer.service';
import { EmployerModel } from './employer.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})

export class EmployersComponent implements OnInit {

  title: String = "Employers";
  
  employer: EmployerModel[] | any;

  constructor(private employerService: EmployerService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
    this.employerService.getEmployers().subscribe((data) => {
      this.employer = JSON.parse(JSON.stringify(data));
      console.log(this.employer);
    })
  }

  viewEmployer(employer_id: any){ 
    localStorage.setItem('viewemployer', employer_id);
    this.router.navigate(['employer']);
  }
  
  editEmployer(employer_id: any){
    localStorage.setItem('editEmployer', employer_id);
    console.log(employer_id);
    this.router.navigate(['edit-employer']);
   }

  deleteEmployer(employer_id: any){
    this.employerService.deleteEmployer(employer_id)
    .subscribe((data)=>{
      console.log(data);
    });

    window.location.reload();
    this.notifyService.showInfo(
      'Deleted Successfully'
    );
  }

}
