import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerModel } from '../admin/employers/employer.model';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employerform',
  templateUrl: './employerform.component.html',
  styleUrls: ['./employerform.component.css']
})

export class EmployerformComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    confirmpassword: new FormControl('', Validators.compose([Validators.required])),
    role: new FormControl('')
  })

  addemployer = new EmployerModel("", "", "", "");

  constructor(public employerService: EmployerService, public router: Router) { }

  ngOnInit(): void {
  }

  AddEmployer() {
    this.employerService.addEmployer(this.addemployer);
    alert("New Employer Added");
    this.router.navigate(['/employers']);
  }
}
