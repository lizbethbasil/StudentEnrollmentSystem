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
import { EditcourseComponent } from './editcourse/editcourse.component';

const routes: Routes = [
  {path:"", component: HomeComponent},

  {path:"courses", component: CoursesComponent},
  {path:"addcourse", component: AddcourseComponent},
  {path:"editcourse", component: EditcourseComponent},

  {path:"students", component: StudentsComponent},

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
