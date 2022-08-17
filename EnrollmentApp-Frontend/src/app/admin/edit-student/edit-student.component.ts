import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {

  title: String = "Edit Student";
  
  name: any = '';
  email: any = '';
  phone: any = '';
  address: any = '';
  qualification: any = '';
  passout: any = '';
  skillset: any = '';
  technologyTraining: any = '';
  year: any = '';
  exitmark: any = '';

  student = (this.name, this.email, this.phone, this.address, this.qualification, this.passout, this.skillset, this.technologyTraining, 
            this.year, this.exitmark);

  constructor(private studentService: StudentService, private router:Router){ }

  ngOnInit(): void {
    let id = localStorage.getItem('editStudent')
    this.studentService.getStudent(id)
    .subscribe((data) => {
      this.student = JSON.parse(JSON.stringify(data))
      console.log(this.student);
    })
  }

  studentEdit(){
    console.log(this.student);
    this.studentService.editStudent(this.student)
    .subscribe(
      response => {
        console.log("success");
        this.router.navigate(['/students'])  
      },
      err=>{
        console.log("failed");
        alert("Update failed. Please try again later.")
      }
    ) 
  }
}
