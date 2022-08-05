const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
// const port = 5000;

const courseData = require("./src/model/courseData");
const employerData = require("./src/model/employerData");
const studentData = require("./src/model/studentData");
const enrollData = require("./src/model/enrollData");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); 

//api creation - route definitions
app.get('/', (req, res) => {
    res.send("ICTAK Student Enrollment System Server Up!")
});

// get courses
app.get('/courses', (req,res) => {
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    courseData.find()
        .then(function(courses){
            res.send(courses);
        });
});  

// get single course using _id
app.get('/course/:id', (req,res) => {  
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    let id = req.params.id;
    courseData.findOne({_id: id}, (err,course) => { 
        res.send(course)
    })
});

// add course
app.post('/addcourse', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var course = {
        code: req.body.item.code,
        name: req.body.item.name,
        technology: req.body.item.technology,
        intro: req.body.item.intro,
        overview: req.body.item.overview,
        info: req.body.item.info,
        eligibility: req.body.item.eligibility,
        fee: req.body.item.fee,
        count: req.body.item.count,
        image: req.body.item.image
    }

    console.log("New Course Added");
    var courses = new courseData(course);
    courses.save();
});

// edit course
app.put('/editcourse', (req, res) => {
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body)
    let id=req.body.course._id
    courseData.findByIdAndUpdate({"_id": id},
    {$set:
        {
            name : req.body.course.name,
            certification : req.body.course.certification,
            details : req.body.course.details,
            price : req.body.course.price,
            eligibility : req.body.course.eligibility,
            code:req.body.course.code
        }
    }) 
    .then((data)=>{
        console.log(data); 
        res.send(data)
    })
});

// delete course
app.delete('deletecourse/:id', (req,res) => {  
    id = req.params.id;
    courseData.findByIdAndDelete({"_id": id})
    .then(()=>{
        console.log('success');
        res.send();
    })
});

// get employers
app.get('/employers',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    employerData.find()
        .then(function(employers){
            res.send(employers);
        });
});  

// add employer
app.post('/addemployer', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var employer = {
        name: req.body.item.name,
        email: req.body.item.email,
        password: req.body.item.password,
        role: req.body.item.role,
    }

    console.log("New Employer Added");
    var employers = new employerData(employer);
    employers.save();
});

// get students
app.get('/students',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    enrollData.find()
        .then(function(students){
            res.send(students);
        });
});  

// add student
app.post('/addstudent', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var student = {
        name: req.body.item.name,
        email: req.body.item.email,
        password: req.body.item.password
    }

    console.log("New Student Added");
    var students = new studentData(student);
    students.save();
});

// edit student
app.post('/editstudent', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var student = {
        name: req.body.item.name,
        email: req.body.item.email,
        phone: req.body.item.phone,
        address: req.body.item.address,
        qualification: req.body.item.qualification,
        passout: req.body.item.passout,
        skillset: req.body.item.skillset,
        employmentStatus: req.body.item.employmentStatus,
        technologyTraining: req.body.item.technologyTraining,
        year: req.body.item.year,
        course: req.body.item.course,
        fee: req.body.item.fee,
        id: req.body.item.id,
        image: req.body.item.image,
        exitmark: req.body.item.exitmark
    }

    console.log("Student Profile Updated");
    var students = new studentData(student);
    students.save();
});

// enroll
app.post('/enroll', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var enroll = {
        name: req.body.item.name,
        email: req.body.item.email,
        phone: req.body.item.phone,
        address: req.body.item.address,
        qualification: req.body.item.qualification,
        passout: req.body.item.passout,
        skillset: req.body.item.skillset,
        employmentStatus: req.body.item.employmentStatus,
        technologyTraining: req.body.item.technologyTraining,
        year: req.body.item.year,
        course: req.body.item.course,
        fee: req.body.item.fee,
        id: req.body.item.id,
        image: req.body.item.image,
        exitmark: req.body.item.exitmark
    }

    console.log("Enrolled!");
    var enrolls = new enrollData(enroll);
    enrolls.save();
});


app.listen(5000, () => {
    console.log("Listening on Port 5000")
});