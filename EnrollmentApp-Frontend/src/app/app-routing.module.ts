import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './admin/course/course.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { StudentsComponent } from './admin/students/students.component';
import { EditcourseComponent } from './admin/editcourse/editcourse.component';
import { EmployersComponent } from './admin/employers/employers.component';

const routes: Routes = [
  {path:"", component: HomeComponent},

  {path:"courses", component: CoursesComponent},
  {path:"addcourse", component: AddcourseComponent},
  {path:"editcourse", component: EditcourseComponent},

  // {path:"course", component: CourseComponent},
  {path:"course/:id", component: CourseComponent},

  {path:"employers", component: EmployersComponent},

  {path:"students", component: StudentsComponent},

  {path:"employerregistration", component: EmployerformComponent},
  {path:"studentregistration", component: StudentformComponent},
  {path: "userlogin", component: UserloginComponent},
  {path: "enroll", component: EnrollmentformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
