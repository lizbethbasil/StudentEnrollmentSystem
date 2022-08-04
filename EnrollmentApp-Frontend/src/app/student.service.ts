import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http: HttpClient) { }
  getStudents() {
    return this.http.get('http://localhost:5000/students');
  }

  addStudent(item: any) {
    return this.http.post('http://localhost:5000/addstudent', { item })
      .subscribe(data => { 
        console.log(data) 
      });
  }
}
