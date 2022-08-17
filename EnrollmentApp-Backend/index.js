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
    var user = {
        name: req.body.item.name,
        email: req.body.item.email,
        password: req.body.item.password,
        role: req.body.item.role,
    }
    console.log(req.body);   
    console.log("New User Added");
    var users = new userData(user);
    users.save();
});

// get courses
app.get('/courses', (req, res) => {
    courseData.find()
        .then(function(courses){
            res.send(courses);
        });
});  

// enroll
app.post('/enroll', (req, res) => {
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
        exitmark: req.body.item.exitmark,
        status: req.body.item.status
    }

    console.log("Enrolled!");
    var enrolls = new enrollData(enroll);
    enrolls.save();
});

// get course enrollment requests
app.get('/approvals',function(req, res){
    enrollData.find({'status': 'pending'})
        .then(function(students){
            res.send(students);
        });
}); 

// approve course enrollment requests
app.post("/approvals", function(req, res){
    console.log(req.body)
    enrollData.findOneAndUpdate({email: req.body.email},
        {$set:
            {'status':"approved"}}, function(err, student){
       //enrollData.updateOne({email:req.body.email},{$set:{exitmark: req.body.mark, status:"approved"}}, function(err, student){
       if(!err){
        console.log(student)
        res.json({status:"student approved"})
       }else{
        console.log(err)
       }
    })
});

// get employers
app.get('/employers',function(req, res){
    userData.find({'role': 'Employer'})
        .then(function(employers){
            res.send(employers);
            console.log(employers);
        });
});  

// get employer by id
app.get('/employer/:id', function(req, res) {  
    let id = req.params.id;
    console.log(id);
    userData.findOne({_id: id}, function(err, course) {
        if(err){
            console.log(err)
        }else{
            console.log(course)
            res.status(200).send(course)
        }
    });
});

// delete employer by id
app.delete('/deleteemployer/:id', (req, res) => { 
    console.log("Delete Started") 
    id = req.params.id;
    console.log(id)
    userData.findByIdAndDelete({_id: id})
    .then(()=>{
        console.log('Success');
        res.status(200);
    })
});

// edit employer
app.put('/edit-employer', (req, res) => {
    console.log(req.body);
    let id = req.body.employer._id;
    userData.findByIdAndUpdate({"_id": id},
    {
        $set:{ name: req.body.employer.name }
    }) .then((data)=>{
        console.log(data); 
        res.send(data)
    })
});

// get students
app.get('/students',function(req, res){
    enrollData.find({'status': 'approved'})
    // enrollData.find()
        .then(function(students){
            res.send(students);
            console.log(students);
        });
});

// get student by id
app.get('/student/:id', function(req, res) {  
    let id = req.params.id;
    console.log(id);
    enrollData.findOne({_id: id}, function(err, course) {
        if(err){
            console.log(err)
        }else{
            console.log(course)
            res.status(200).send(course)
        }
    });
});

// delete student by id
app.delete('/deletestudent/:id', (req, res) => { 
    console.log("Delete Started") 
    id = req.params.id;
    console.log(id)
    enrollData.findByIdAndDelete({_id: id})
    .then(()=>{
        console.log('Success');
        res.status(200);
    })
});

// edit student
app.put('/edit-student', (req, res) => {
    console.log(req.body);
    let id = req.body.student._id;
    enrollData.findByIdAndUpdate({"_id": id},
    {
        $set:{ exitmark: req.body.student.exitmark }
    }) .then((data)=>{
        console.log(data); 
        res.send(data)
    })
});

app.listen(5000, () => {
    console.log("Listening on Port 5000")
});