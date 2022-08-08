const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
// const port = 5000;

const userData = require("./src/model/userData");
const courseData = require("./src/model/courseData");
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

// add user
app.post('/usersignup', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body);
    var user = {
        name: req.body.item.name,
        email: req.body.item.email,
        password: req.body.item.password,
        role: req.body.item.role,
    }

    console.log("New User Added");
    var users = new userData(user);
    users.save();
});

// get courses
app.get('/courses', (req, res) => {
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    courseData.find()
        .then(function(courses){
            res.send(courses);
        });
});  

// get employers
app.get('/employers',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    userData.find({'role': 'Employer'})
        .then(function(employers){
            res.send(employers);
            console.log(employers);
        });
});  

// get course enrollment requests
app.get('/approvals',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    enrollData.find()
        .then(function(students){
            res.send(students);
        });
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

// edit student
// app.post('/editstudent', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//     console.log(req.body);
//     var student = {
//         name: req.body.item.name,
//         email: req.body.item.email,
//         phone: req.body.item.phone,
//         address: req.body.item.address,
//         qualification: req.body.item.qualification,
//         passout: req.body.item.passout,
//         skillset: req.body.item.skillset,
//         employmentStatus: req.body.item.employmentStatus,
//         technologyTraining: req.body.item.technologyTraining,
//         year: req.body.item.year,
//         course: req.body.item.course,
//         fee: req.body.item.fee,
//         id: req.body.item.id,
//         image: req.body.item.image,
//         exitmark: req.body.item.exitmark
//     }

//     console.log("Student Profile Updated");
//     var students = new studentData(student);
//     students.save();
// });

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