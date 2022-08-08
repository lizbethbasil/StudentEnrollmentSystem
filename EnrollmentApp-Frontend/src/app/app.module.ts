import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentformComponent } from './student/enrollmentform/enrollmentform.component';
import { StudentsComponent } from './admin/students/students.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MyprofileComponent } from './student/myprofile/myprofile.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { CoursesComponent } from './student/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServicesComponent,
    AboutComponent,
    OfferingsComponent,
    UserloginComponent,
    EnrollmentformComponent,
    StudentsComponent,
    EmployersComponent,
    UsersignupComponent,
    MyprofileComponent,
    ApprovalsComponent,
    CoursesComponent
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
