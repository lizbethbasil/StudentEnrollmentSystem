import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http: HttpClient) { }

  enroll(item: any) {
    return this.http.post('http://localhost:5000/enroll', { item })
  }

  getEnrolledStudents() {
    return this.http.get('http://localhost:5000/approvals');
  }

  approve(email: any) {
   return this.http.post('http://localhost:5000/approvals', {email: email});
 }

  getStudents() {
    return this.http.get('http://localhost:5000/students');
  }

  getStudent(id: any){
    return this.http.get("http://localhost:5000/student/" + id); 
  }

  editStudent(data: any) {
    return this.http.put(`http://localhost:5000/edit-student`, {"student": data});
  }

  deleteStudent(id: any) {
    return this.http.delete("http://localhost:5000/deletestudent/" + id);
  }
}
