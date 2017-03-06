/**
 * Created by stevenmcdonald on 3/6/17.
 */

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    heading: {Type: String, default: ""},
    text: {Type: String, default: ""},
    timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model("CommentSchema", CommentSchema);
