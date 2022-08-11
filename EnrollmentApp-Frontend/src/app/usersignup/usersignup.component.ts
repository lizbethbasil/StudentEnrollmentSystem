import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})

export class UsersignupComponent {

  signupForm!:UntypedFormGroup;

  constructor(private formbuilder: UntypedFormBuilder, private userService: UserService, 
    private notifyService: NotificationService, private router: Router){
    this.signupForm = this.formbuilder.group({
      name: new UntypedFormControl(''),
      email: new UntypedFormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')])),
      password: new UntypedFormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')])),
      confirmpassword: new UntypedFormControl('', Validators.compose([Validators.required])),
      role: new UntypedFormControl('', Validators.compose([Validators.required]))
    },
    { validators: this.Mustmatch('password', 'confirmpassword') }
  )}
  
  get f(){
    return this.signupForm.controls
  }

  Mustmatch(password: any, confirmpassword: any){
    return (formGroup: UntypedFormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confirmpassword];

      if(confirmpasswordcontrol.errors && !confirmpasswordcontrol.errors['Mustmatch']){
        return;
      }
      
      if(passwordcontrol.value !== confirmpasswordcontrol.value){
        confirmpasswordcontrol.setErrors({Mustmatch: true})
      } else{
        confirmpasswordcontrol.setErrors(null);
      }
    }
  }

  adduser = new UserModel("", "", "", "");

  AddUser() {
    this.userService.addUser(this.adduser);
    // alert("User Sign Up Successful");
    this.notifyService.showInfo(
      'Sign Up Successful', ''
    );
    this.router.navigate(['/']);
  }
}
