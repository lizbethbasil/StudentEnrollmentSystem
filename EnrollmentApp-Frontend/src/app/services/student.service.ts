import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http: HttpClient) { }
  enroll(item: any) {
    return this.http.post('http://localhost:5000/enroll', { item })
      .subscribe(data => { 
        console.log(data) 
      });
  }

  getEnrolledStudents() {
    return this.http.get('http://localhost:5000/approvals');
  }

  approve(item: any) {
    // return this.http.post('http://localhost:5000/approvals', { item })
    //   .subscribe(data => { 
    //     console.log(data) 
    //   });
  }


}
