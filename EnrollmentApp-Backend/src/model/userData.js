const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;

const userSchema= new schema({
    name: String,
    email: String,
    password: String,
    role: String
});

// model
var userdata = mongoose.model('userdatas', userSchema);

module.exports = userdata;