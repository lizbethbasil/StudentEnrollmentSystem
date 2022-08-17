import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(public http: HttpClient) { }

  getEmployers() {
    return this.http.get('http://localhost:5000/employers');
  }

  getEmployer(id: any){
    return this.http.get("http://localhost:5000/employer/" + id); 
  }

  editEmployer(data: any) {
    return this.http.put(`http://localhost:5000/edit-employer`, {"employer": data});
  }

  deleteEmployer(id: any) {
    return this.http.delete("http://localhost:5000/deleteemployer/" + id);
  }
}
