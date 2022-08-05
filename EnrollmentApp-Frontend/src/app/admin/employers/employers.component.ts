import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/employer.service';
import { EmployerModel } from './employer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  title: String = "Employers";
  
  employer: EmployerModel[] | any;

  constructor(public employerService: EmployerService, public router: Router) { }

  ngOnInit(): void {
    this.employerService.getEmployers().subscribe((data) => {
      this.employer = JSON.parse(JSON.stringify(data));
      console.log(this.employer);
    })
  }

  viewEmployer(employer: any){ }
  
  editEmployer(employer: any){ }

  deleteEmployer(employer: any){ }

}
