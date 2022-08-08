const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;
const studentSchema= new schema({   
    name: String,
    email: String,
    password: String
});

// model
var studentdata = mongoose.model('studentdatas',studentSchema);
module.exports = studentdata;