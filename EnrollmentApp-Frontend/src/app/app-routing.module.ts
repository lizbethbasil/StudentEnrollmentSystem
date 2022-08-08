import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentformComponent } from './student/enrollmentform/enrollmentform.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StudentsComponent } from './admin/students/students.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MyprofileComponent } from './student/myprofile/myprofile.component';
import { CoursesComponent } from './student/courses/courses.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';

const routes: Routes = [
  {path:"", component: HomeComponent},

  {path:"usersignup", component: UsersignupComponent},
  {path: "userlogin", component: UserloginComponent},
  
  {path: "approvals", component: ApprovalsComponent},
  {path:"employers", component: EmployersComponent},
  {path:"students", component: StudentsComponent},
  {path: "myprofile", component: MyprofileComponent},
  {path:"courses", component: CoursesComponent},
  {path: "enroll", component: EnrollmentformComponent}

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
