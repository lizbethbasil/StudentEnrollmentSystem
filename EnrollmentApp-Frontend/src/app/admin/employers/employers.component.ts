import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../../services/employer.service';
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

  constructor(private employerService: EmployerService, private router: Router) { }

  ngOnInit(): void {
    this.employerService.getEmployers().subscribe((data) => {
      this.employer = JSON.parse(JSON.stringify(data));
      console.log(this.employer);
    })
  }

  viewEmployer(id: any){ }
  
  editEmployer(id: any){ 
    this.router.navigate([`/edit/${id}`]);
  }

  deleteEmployer(id: any){ 
    if(confirm('Are you sure want to delete?')){
      this.employerService.deleteEmployer(id).subscribe((res:any)=>{
        if(res.success===1){
          this.ngOnInit();
        }
      })
  
    }
  }

}
