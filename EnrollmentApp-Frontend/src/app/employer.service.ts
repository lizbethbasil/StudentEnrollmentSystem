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

}
