const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;

const courseSchema= new schema({
    name: String,
    technology: String,
    intro: String,
    image: String,
    fee: Number
});

// model
var coursedata = mongoose.model('coursedatas', courseSchema);
module.exports = coursedata;