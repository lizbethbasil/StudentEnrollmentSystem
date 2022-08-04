import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../courses/course.model';
import { CourseService } from '../../course.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  
  course: CourseModel[] | any;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(public courseService: CourseService, public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    let id = localStorage.getItem('viewcourse')
    this.courseService.getCourse(id)
    .subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
      console.log(data);
    })
  }

}
