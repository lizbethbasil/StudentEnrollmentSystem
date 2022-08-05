import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StudentformComponent } from './studentform/studentform.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { StudentsComponent } from './admin/students/students.component';
import { CourseComponent } from './admin/course/course.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { EmployersComponent } from './admin/employers/employers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    FooterComponent,
    NavbarComponent,
    ServicesComponent,
    AboutComponent,
    OfferingsComponent,
    UserloginComponent,
    StudentformComponent,
    EmployerformComponent,
    EnrollmentformComponent,
    AddcourseComponent,
    StudentsComponent,
    CourseComponent,
    AddstudentComponent,
    EmployersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
