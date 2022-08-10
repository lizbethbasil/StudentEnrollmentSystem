import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(public http: HttpClient) { }
  
  addCourse(item: any) {
    return this.http.post('http://localhost:5000/addcourse', { item })
      .subscribe(data => { 
        console.log(data) 
      });
  }

  getCourses() {
    return this.http.get('http://localhost:5000/courses');
  }

  getCourse(id: any){
    return this.http.get("http://localhost:5000/course/" + id);
  }

  deleteCourse(id: any){
    return this.http.delete("http://localhost:5000/courses/")
  }

  editCourse(course: any){
    return this.http.put('http://localhost:5000/editcourse', { "course": course })
  }

}