import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../student/courses/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})

export class OfferingsComponent implements OnInit {
  courses: CourseModel[] | any;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = JSON.parse(JSON.stringify(data));
      console.log(this.courses);
    })
  }

//   courses = [
//     {id: 'ds-and-ml', img: '../../assets/img/card-img-1-ds.png', alt:'data science & machine learning', title: 'Data Science & Machine Learning'},
//     {id: 'fsd-mean', img: '../../assets/img/card-img-2-fsd.png', alt:'full stack development - mean', title: 'Full Stack Development (MEAN)'},
//     {id: 'software-testing', img: '../../assets/img/card-img-3-swtest.png', alt:'software testing', title: 'Software Testing'},
//     {id: 'ds-and-analytics', img: '../../assets/img/card-img-4-ds2.png', alt:'data science & analytics', title: 'Data Science & Analytics'},
//     {id: 'rpa', img: '../../assets/img/card-img-5-rpa.png', alt:'robotic process automation', title: 'Robotic Process Automation'},
//     {id: 'cyber-security', img: '../../assets/img/card-img-6-cyber.png', alt:'cyber security analyst', title: 'Cyber Security Analyst'},
//     {id: 'digital-marketing', img: '../../assets/img/card-img-7-dig.png', alt:'digital marketing', title: 'Digital Marketing'},
//     {id: 'fsd-mern', img: '../../assets/img/card-img-8-fsd2.png', alt:'full stack development - mern', title: 'Full Stack Development (MERN)'}
// ]

}
