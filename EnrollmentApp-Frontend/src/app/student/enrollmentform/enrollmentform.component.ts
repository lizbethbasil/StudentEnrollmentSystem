import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-enrollmentform',
  templateUrl: './enrollmentform.component.html',
  styleUrls: ['./enrollmentform.component.css']
})

export class EnrollmentformComponent implements OnInit {
  title: String = 'Enroll Here';

  enrollstudent = { 
    name: '', 
    email: '', 
    phone: '', 
    address: '', 
    qualification: '', 
    passout: '',
    skillset: '',
    employmentStatus: '',
    technologyTraining: '',
    year: '',
    course: '',
    fee: '',
    image: '',
    status: '' 
  };
  
  constructor(private studentService: StudentService, private notifyService: NotificationService, private router: Router) { }

  ngOnInit(): void {
  }

  Enroll() {
    switch(this.enrollstudent.course){
      case 'Data Science & Machine Learning': {
        this.enrollstudent.fee = '30000';
        break;
      }
      case 'Full Stack Development - MEAN': {
        this.enrollstudent.fee = '25000';
        break;
      }
      case 'Software Testing': {
        this.enrollstudent.fee = '20000';
        break;
      }
      case 'Data Science & Analytics': {
        this.enrollstudent.fee = '30000';
        break;
      }
      case 'Robotic Process Automation': {
        this.enrollstudent.fee = '28000';
        break;
      }
      case 'Cyber Security Analysis': {
        this.enrollstudent.fee = '24000';
        break;
      }
      case 'Digital Marketing': {
        this.enrollstudent.fee = '22000';
        break;
      }
      case 'Full Stack Development (MERN)': {
        this.enrollstudent.fee = '25000';
        break;
      }
      default: {
        this.enrollstudent.fee = '';
        break;
      }
    }
      
    
    console.log(this.enrollstudent.fee);
    this.enrollstudent.status = 'pending';
    this.studentService.enroll(this.enrollstudent);
    this.notifyService.showInfo(
      'Course Enrollment Successful'
    );
    console.log(this.enrollstudent);
    this.router.navigate(['/courses']);
  }
}
