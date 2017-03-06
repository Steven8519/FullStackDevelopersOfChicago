"use strict";

/**
 * Created by stevenmcdonald on 3/6/17.
 */

var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
    heading: { Type: String, default: "" },
    text: { Type: String, default: "" },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CommentSchema", CommentSchema);
//# sourceMappingURL=comment.js.map