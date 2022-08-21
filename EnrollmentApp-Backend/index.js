const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const nodemailer= require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: __dirname + '/.env' });

const PORT = process.env.PORT || 5000;
// const port = 5000;

const userData = require("./src/model/userData");
const courseData = require("./src/model/courseData");
const enrollData = require("./src/model/enrollData");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// api creation - route definitions
app.get('/', (req, res) => {
    res.send("ICTAK Student Enrollment System Server Up!")
});

// user signup
app.post('/usersignup', (req, res) => {
    var newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    };

    console.log("signup process starts");
    console.log(newUser);
    
    userData.findOne({ email: newUser.email }, (error, user) => {
        console.log("error=" + error);
        console.log("user=" + user);
        
        if(error){
            console.log(error);
        }else if(user){
            console.log("User Exists");
            res.json({ status: false, reason: "User exists" });
        }else{
            var users = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
            };
  
            console.log("New User Added");
            var userss = new userData(users);
            res.json({ status: true });
            userss.save();
        }
    });
});

// user authentication
function verifyAdminToken(req, res, next){
    if(!req.headers.authorization){
      return res.status(401).send("Unauthorised Request");
    }

    let token = req.headers.authorization.split(" ")[1];
    if (token == "null") {
      return res.status(401).send("Unauthorised Request");
    }

    let payload = jwt.verify(token, "adminKey");
    console.log(payload);
    if (!payload){
      return res.status(401).send("Unauthorised Request");
    }
    req.userId = payload.subject;
    next();
}

function verifyStudentToken(req, res, next){
    if(!req.headers.authorization){
      return res.status(401).send("Unauthorised Request");
    }

    let token = req.headers.authorization.split(" ")[1];
    if (token == "null") {
      return res.status(401).send("Unauthorised Request");
    }

    let payload = jwt.verify(token, "studentKey");
    console.log(payload);
    if (!payload) {
      return res.status(401).send("Unauthorised Request");
    }
    req.userId = payload.subject;
    next();
}
  
function verifyEmployerToken(req, res, next){
    if (!req.headers.authorization){
      return res.status(401).send("Unauthorised Request");
    }

    let token = req.headers.authorization.split(" ")[1];
    if(token == "null"){
      return res.status(401).send("Unauthorised Request");
    }

    let payload = jwt.verify(token, "employerKey");
    console.log(payload);
    if (!payload) {
      return res.status(401).send("Unauthorised Request");
    }
    req.userId = payload.subject;
    next();
}

// user login
app.post("/userlogin", function(req, res){
    var checkUser = {
      email: req.body.email,
      password: req.body.password
    };
    console.log("log in process start");
    console.log(checkUser);

    try{
        userData.findOne({ email: checkUser.email }, (error, user) => {
            console.log(user);
            if(error){
                console.log(error);
            }else{
                if(!user){
                    res.json({status: false, reason: 'Invalid Email'}).status(401);
                    // res.json({status:false});
                }else if(checkUser.password != user.password){
                    res.json({status: false, reason: 'Invalid Password'}).status(401);
                    // res.json({status:false});
                }else{
                    let payload = { subject: checkUser.email + checkUser.password };
                    if (user.role == "admin"){
                        let token = jwt.sign(payload, "adminKey");
                        console.log("admin token: ", token);
                        res
                        .status(200)
                        .send({
                            status: true,
                            name: user.username,
                            role: "admin",
                            token,
                        });
                    }else if(user.role == "Student"){
                        let token = jwt.sign(payload, "studentKey");
                        console.log("student token: ", token);
                        res
                        .status(200)
                        .send({
                            status: true,
                            name: user.username,
                            role: "Student",
                            email: user.email,
                            token,
                        });
                    }else if(user.role == "Employer"){
                        let token = jwt.sign(payload, "employerKey");
                        console.log("employer token: ", token);
                        res
                        .status(200)
                        .send({
                            status: true,
                            name: user.username,
                            role: "Employer",
                            token,
                        });
                    }else{
                        console.log('Unauthorized Access');
                        res.status(401)
                        .send({
                            status: false,
                            role: "unauthorized"
                        })
                    }
                }
            }
        });
    }catch(e){
        console.log(error);
        res.send(e);
    }
});

// admin pages
// get course enrollment requests
app.get('/approvals', verifyAdminToken, function(req, res){
    enrollData.find({status: 'pending'})
        .then(function(students){
            res.send(students);
        });
}); 

// approve course enrollment requests
app.post("/approvals", verifyAdminToken, function (req, res) {
    console.log(req.body);

    enrollData.findOne({ email: req.body.email }, function(err,student){
        if(!err){
            approveStudent = student;
            data = { name: approveStudent.name, id: generateId(approveStudent), email: approveStudent.email };
            sendEmail(data);
            console.log("student found"+ student);
            enrollData.updateOne({email: req.body.email}, 
            { $set: { status: "approved" , id: generateId(approveStudent) }},
            function(err, approveStudent){
                if (!err){
                    console.log(approveStudent);
                    res.json({ status: "student approved" });
                }else{
                    console.log(err);
                }
            })
        }
    })
});

//generate ID function
function generateId(student){
    console.log('function reached');
    let part1 = student.phone.slice(5,10)
    return `S${part1}`;  
}

// send email
function sendEmail(data) {
    try{
        console.log(data)
        let transport = {
            host: "smtp-relay.sendinblue.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "anusreeprasad2998@gmail.com",
                 pass: process.env.PASS
                 //process.env.PASS
            }
        }
        
        let email_data = {
            from: "ictacademyadmin@stdenr.com",
            to: data.email,
            subject: "ICT Academy of Kerala - Course Enrollment Approved",
            text: `Your student id is: ${data.id}` ,
            html: `<p> Hi ${data.name}, </p> 
                   <p> You have successfully enrolled and your Student ID is: ${data.id}.</p>
                   <p>Please use the same ID as a reference for your future communications. </p> 
                   <p> Happy Learning! </p>
                   <p> Regards, </p>
                   <p> ICT Academy of Kerala</p>`
        };

        let transporter = nodemailer.createTransport(transport)
  
        transporter.sendMail(email_data, function (err, info) {
            if(err){
                console.log(err)
            }else{
                console.log(info)
            }
        })
    }catch(error){
        return error
    }
}

// get employers
app.get('/employers', verifyAdminToken, function(req, res){
    userData.find({role: 'Employer'})
        .then(function(employers){
            res.send(employers);
            console.log(employers);
        });
});  

// get employer by id
app.get('/employer/:id', verifyAdminToken, function(req, res) {  
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

// edit employer
app.put('/edit-employer', verifyAdminToken, (req, res) => {
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

// delete employer by id
app.delete('/deleteemployer/:id', verifyAdminToken, (req, res) => { 
    console.log("Delete Started") 
    id = req.params.id;
    console.log(id)
    userData.findByIdAndDelete({_id: id})
    .then(()=>{
        console.log('Success');
        res.status(200);
    })
});

// get students
app.get('/students',verifyAdminToken, function(req, res){
    enrollData.find({status: 'approved'})
    // enrollData.find()
        .then(function(students){
            res.send(students);
            console.log(students);
        });
});

// get student by id
app.get('/student/:id', verifyAdminToken, function(req, res) {  
    let id = req.params.id;
    console.log(id);
    enrollData.findOne({_id: id}, function(err, course) {
        if(err){
            console.log(err);
        }else{
            console.log(course);
            res.status(200).send(course);
        }
    });
});

// edit student
app.put('/edit-student', verifyAdminToken, (req, res) => {
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

// delete student by id
app.delete('/deletestudent/:id', verifyAdminToken, (req, res) => { 
    console.log("Delete Started") 
    id = req.params.id;
    console.log(id)
    enrollData.findByIdAndDelete({_id: id})
    .then(()=>{
        console.log('Success');
        res.status(200);
    })
});

// get courses
app.get('/courses', (req, res) => {
    courseData.find()
        .then(function(courses){
            res.send(courses);
        });
});  

// enroll
app.post('/enroll', verifyStudentToken, (req, res) => {
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

// get student profile
app.get('/myprofile/:email', verifyStudentToken, (req, res) => {  
    let email = req.params.email;
    console.log(email);
    enrollData.findOne({email: email}, function(err, course) {
        if(err){
            console.log(err);
        }else{
            console.log(course);
            res.status(200).send(course);
        }
    });
});

// edit student profile
app.put('/edit-profile', verifyStudentToken, (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    enrollData.findOneAndUpdate({email: email},
    {
        $set:{ 
            address: req.body.student.address,
            qualification: req.body.student.qualification,
            passout : req.body.student.passout,
            skillset: req.body.student.skillset,
            employmentStatus: req.body.student.employmentStatus,
            technologyTraining: req.body.student.technologyTraining,
            year: req.body.student.year
         }
    }) .then((data)=>{
        console.log(data); 
        res.send(data)
    })
});
app.get("/searchstudents",verifyEmployerToken, function (req, res) {
    enrollData.find( { status: "approved"}).then(function (students) {
      res.send(students);
    });
  });

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});