import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../courses/course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  title: String = "New Course";
  addcourse = new CourseModel("", "", "", "", "", "", "", 0, 0, "");

  constructor(public courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
  }

  AddCourse() {
    this.courseService.addCourse(this.addcourse);
    alert("New Course Added");
    this.router.navigate(['/courses']);
  }

}
