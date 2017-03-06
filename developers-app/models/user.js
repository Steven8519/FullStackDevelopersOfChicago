/**
 * Created by stevenmcdonald on 3/6/17.
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type:String,  default: ""},
    lastName: {type:String, default: ""},
    email: {type:String,  default: ""},
    password: {type:String, required:true, default:""},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('UserSchema', UserSchema);