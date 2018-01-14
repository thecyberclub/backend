var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    department: { type: String, required: true },
    register_num: { type: String, required: true, unique: true },
    college_id: { type: String, required: true, unique: true },
    createdOn: { type: Date, required: true, default: new Date().toISOString() }
});

module.exports = mongoose.model('User', UserSchema);
