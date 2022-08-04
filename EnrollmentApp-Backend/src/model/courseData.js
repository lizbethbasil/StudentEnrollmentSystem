const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lizbeth:45114511@firstcluster.uaeri.mongodb.net/StudentEnrollmentSystemDb?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;

const courseSchema= new schema({
    code: String,
    name: String,
    technology: String,
    intro: String,
    overview: String,
    info: String,
    eligibility: String,
    fee: Number,
    count: Number,
    image: String
});

// model
var coursedata = mongoose.model('coursedatas',courseSchema);
module.exports = coursedata;