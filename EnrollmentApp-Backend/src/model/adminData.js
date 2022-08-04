const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;

const adminSchema= new schema({
    username: String,
    password: String,
});

// model
var admindata = mongoose.model('admindatas', adminSchema);

module.exports = admindata;