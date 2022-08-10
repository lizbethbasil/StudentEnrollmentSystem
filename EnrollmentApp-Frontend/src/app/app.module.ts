import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { EmployersComponent } from './admin/employers/employers.component';
import { StudentsComponent } from './admin/students/students.component';
import { AboutComponent } from './home/about/about.component';
import { AchievementsComponent } from './home/achievements/achievements.component';
import { FooterComponent } from './home/footer/footer.component';
import { IndexComponent } from './home/index/index.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { OfferingsComponent } from './home/offerings/offerings.component';
import { CoursesComponent } from './student/courses/courses.component';
import { EnrollmentformComponent } from './student/enrollmentform/enrollmentform.component';
import { MyprofileComponent } from './student/myprofile/myprofile.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprovalsComponent,
    EmployersComponent,
    StudentsComponent,
    AboutComponent,
    AchievementsComponent,
    FooterComponent,
    IndexComponent,
    NavbarComponent,
    OfferingsComponent,
    CoursesComponent,
    EnrollmentformComponent,
    MyprofileComponent,
    UserloginComponent,
    UsersignupComponent
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
