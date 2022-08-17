import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  addUser(item: any) {
    return this.http.post('http://localhost:5000/usersignup', { item })
      .subscribe(data => { 
        console.log(data) 
      });
  }

}
