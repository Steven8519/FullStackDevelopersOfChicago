/**
 * Created by stevenmcdonald on 3/6/17.
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type:String, trim: true, lowercase: true, require: true,  default: ""},
    lastName: {type:String, trim: true, lowercase: true, require: true, default: ""},
    email: {type:String,  trim: true, lowercase: true, require: true, default: ""},
    password: {type:String, require: true,   default:""},
    occupation: {type: String, default: ""},
    timestamp: {type:Date, default:Date.now}
});

UserSchema.methods.summary = function () {
  const summary = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        id: this._id

  };
  return summary;
};

module.exports = mongoose.model('UserSchema', UserSchema);