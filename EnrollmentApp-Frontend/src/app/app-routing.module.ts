import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './home/index/index.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { EmployerComponent } from './admin/employer/employer.component';
import { EditEmployerComponent } from './admin/edit-employer/edit-employer.component';
import { StudentsComponent } from './admin/students/students.component';
import { StudentComponent } from './admin/student/student.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { MyprofileComponent } from './student/myprofile/myprofile.component';
import { CoursesComponent } from './student/courses/courses.component';
import { EnrollmentformComponent } from './student/enrollmentform/enrollmentform.component';
import { EditProfileComponent } from './student/edit-profile/edit-profile.component';

const routes: Routes = [
  {path: "", component: IndexComponent},

  {path: "usersignup", component: UsersignupComponent},
  {path: "userlogin", component: UserloginComponent},
  
  {path: "approvals", component: ApprovalsComponent},
  {path: "employers", component: EmployersComponent},
  {path: "employer", component: EmployerComponent},
  {path: "edit-employer", component: EditEmployerComponent},

  {path: "students", component: StudentsComponent},
  {path: "student", component: StudentComponent},
  {path: "edit-student", component: EditStudentComponent},

  {path: "courses", component: CoursesComponent},
  {path: "enroll", component: EnrollmentformComponent},
  {path: "myprofile", component: MyprofileComponent},
  {path: "edit-profile", component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
