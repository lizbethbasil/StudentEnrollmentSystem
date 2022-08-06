import { Component, OnInit } from '@angular/core';
import { CourseModel } from '../courses/course.model';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: String = "Available Courses";
  
  course: CourseModel[] | any;
  imageWidth: number = 50;
  imageMargin: number = 2;

  constructor(public courseService: CourseService, public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.course = JSON.parse(JSON.stringify(data));
      console.log(this.course);
    })
  }

  viewCourse(course: any){
    localStorage.setItem('viewcourse', course._id)
    this.router.navigate(['course'])
   }
  
  editCourse(course: any){ }

  delCourse(course: any){
    if(confirm("Are you sure you want to delete this course?")) {
      
      this.courseService.deleteCourse(this.course)
      .subscribe((data) => {
        this.ngOnInit()
      })
    }else{
      this.ngOnInit()
    }
   }

}
