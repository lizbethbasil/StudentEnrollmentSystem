import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../services/employer.service';
import { EmployerModel } from '../employers/employer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  title: String = "Employer Data";

  employer: EmployerModel[] | any;

  constructor(private employerService: EmployerService, private router: Router) { }

  ngOnInit(): void {
    let id = localStorage.getItem('viewemployer');
    
    this.employerService.getEmployer(id)
    .subscribe((data) => {
      this.employer = [data];
      console.log(data);
    })
  }

}
