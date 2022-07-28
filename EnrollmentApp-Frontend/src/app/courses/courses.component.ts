import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {id: 'ds-and-ml', badge: 'data science & artificial intelligence', img: '../../assets/img/card-img-1-ds.png', alt:'data science & artificial intelligence', title: 'PGP in Data Science & Machine Learning', body:'Whether you’re a student, a developer, or a technology consultant - understanding ML/AI and knowing how to create real-time applications can give you an edge in your career.', fee: 2500},
    {id: 'fsd-mean', badge: 'full stack development', img: '../../assets/img/card-img-2-fsd.png', alt:'full stack development - mean', title: 'Certified Specialist In FSD (MEAN)', body:'The MEAN stack is an excellent choice for web developers who wish to develop high-quality web applications using the MEAN stack – MongoDB, Express, Angular & NodeJS.', fee: 2500},
    {id: 'software-testing', badge: 'software testing', img: '../../assets/img/card-img-3-swtest.png', alt:'software testing', title: 'Certified Specialist in Software Testing', body:'The course covers the various industry relevant tools and frameworks used for verifying and validating functional and non-functional requirements of a software product.', fee: 2500},
    {id: 'ds-and-analytics', badge: 'data science & analytics', img: '../../assets/img/card-img-4-ds2.png', alt:'data science & analytics', title: 'Certified Specialist in Data Science & Analytics', body:'ICT Academy of Kerala offers Certified Specialist in Data Science and Analytics is a six-month certification program that includes a virtual industry internship utilizing blended learning techniques.', fee: 2500},
    {id: 'rpa', badge: 'robotic process automation', img: '../../assets/img/card-img-5-rpa.png', alt:'robotic process automation', title: 'Certified Specialist in Robotic Process Automation', body:'Robotic Process Automation (RPA) - software-based robotics that emulates work that people do - to digitize and transform an array of business processes and functions.', fee: 2500},
    {id: 'cyber-security', badge: 'cyber security analysis', img: '../../assets/img/card-img-6-cyber.png', alt:'cyber security analyst', title: 'Certified Specialist in Cyber Security Analyst', body:'This course on introduces students to Cyber Security Fundamentals and Cyber Security to understand the real-world cybersecurity challenges that organizations face today and focuses on hands-on activities.', fee: 2500},
    {id: 'digital-marketing', badge: 'digital marketing', img: '../../assets/img/card-img-7-dig.png', alt:'digital marketing', title: 'Certified Specialist in Digital Marketing', body:'This program covers the essential marketing and advertising concepts, basics of front-end technology development, and in-depth knowledge of online marketing and analytical tools.', fee: 2500},
    {id: 'fsd-mern', badge: 'full stack development', img: '../../assets/img/card-img-8-fsd2.png', alt:'full stack development - mern', title: 'Certified Specialist in FSD (MERN)', body:'The MERN stack is an excellent choice for web developers who wish to develop high-quality web applications using the MERN stack – MongoDB, Express, React & NodeJS, based on one language, Javascript.', fee: 2500}
]

// badges = [
//   {b1: 'data science', b2: 'artificial intelligence'},
//   {b1: 'full stack development', b2: 'mean'},
//   {b1: 'software testing'},
//   {b1: 'data science', b2: 'analytics'},
//   {b1: 'robotic process automation'},
// ] 
  constructor() { }

  ngOnInit(): void {
  }

}
