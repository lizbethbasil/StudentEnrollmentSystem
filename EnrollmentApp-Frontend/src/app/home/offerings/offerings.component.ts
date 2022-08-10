import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../../student/courses/course.model';
import { CourseService } from '../../services/course.service';

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

}
