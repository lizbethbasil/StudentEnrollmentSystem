const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;
const studentSchema= new schema({   
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    qualification: String,
    passout: String,
    skillset: String,
    employmentStatus: String,
    technologyTraining: String,
    year: String,
    course:String,
    fee: String,
    id: String,
    image: String,
    exitmark: String
});

// model
var studentdata = mongoose.model('studentdatas',studentSchema);
module.exports = studentdata;