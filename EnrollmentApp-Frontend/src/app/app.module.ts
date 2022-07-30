import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { CourseComponent } from './course/course.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { StudentformComponent } from './studentform/studentform.component';
import { EmployerformComponent } from './employerform/employerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CourseComponent,
    UserloginComponent,
    StudentformComponent,
    EmployerformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
