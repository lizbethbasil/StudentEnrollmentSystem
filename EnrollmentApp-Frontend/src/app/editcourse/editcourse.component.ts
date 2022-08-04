import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../admin/courses/course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {
  title: String = "Edit Course";
  course = new CourseModel("", "", "", "", "", "", "", 0, 0, "");
  images: any;


  constructor(public courseService: CourseService, public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    // let id = localStorage.getItem('editcourse')
    // this.courseService.getCourse(id)
    // .subscribe((data)=>{
    //   this.course=JSON.parse(JSON.stringify(data));
    //   console.log(data);
    // })
  }

}
