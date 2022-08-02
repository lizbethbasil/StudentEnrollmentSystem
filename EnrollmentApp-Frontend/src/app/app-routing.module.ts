import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { HomeComponent } from './home/home.component';
import { StudentformComponent } from './studentform/studentform.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"courses", component: CoursesComponent},
  // {path:"course/:id", component: CourseComponent},
  {path:"course", component: CourseComponent},
  {path:"employerregistration", component: EmployerformComponent},
  {path:"studentregistration", component: StudentformComponent},
  {path: "userlogin", component: UserloginComponent},
  {path: "enrollment", component: EnrollmentformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
