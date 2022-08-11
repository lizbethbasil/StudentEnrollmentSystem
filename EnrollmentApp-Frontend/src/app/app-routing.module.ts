import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './home/index/index.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { StudentsComponent } from './admin/students/students.component';
import { MyprofileComponent } from './student/myprofile/myprofile.component';
import { CoursesComponent } from './student/courses/courses.component';
import { EnrollmentformComponent } from './student/enrollmentform/enrollmentform.component';
import { EmployerComponent } from './admin/employer/employer.component';

const routes: Routes = [
  {path:"", component: IndexComponent},

  {path:"usersignup", component: UsersignupComponent},
  {path: "userlogin", component: UserloginComponent},
  
  {path: "approvals", component: ApprovalsComponent},
  {path:"employers", component: EmployersComponent},
  {path:"employer", component: EmployerComponent},

  {path:"students", component: StudentsComponent},

  {path: "myprofile", component: MyprofileComponent},
  {path:"courses", component: CoursesComponent},
  {path: "enroll", component: EnrollmentformComponent},

  // {path:'edit/:id', component: EmployersComponent},

  // {path:"addcourse", component: AddcourseComponent},
  // {path:"editcourse", component: EditcourseComponent},
  // {path:"course", component: CourseComponent},
  // {path:"course/:id", component: CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
