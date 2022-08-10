const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;
const enrollSchema= new schema({   
    name: String,
    email: String,
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
    exitmark: String,
    status: String
});

// model
var enrolldata = mongoose.model('enrolldatas', enrollSchema);
module.exports = enrolldata;