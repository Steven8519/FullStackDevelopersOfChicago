"use strict";

/**
 * Created by stevenmcdonald on 3/6/17.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: { type: String, trim: true, lowercase: true, require: true, default: "" },
    lastName: { type: String, trim: true, lowercase: true, require: true, default: "" },
    email: { type: String, trim: true, lowercase: true, require: true, default: "" },
    password: { type: String, require: true, default: "" },
    occupation: { type: String, default: "" },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserSchema', UserSchema);
//# sourceMappingURL=user.js.map