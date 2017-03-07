/**
 * Created by stevenmcdonald on 3/6/17.
 */
const Comment = require("../models/comment");
const Promise = require("bluebird");

module.exports = {
    get: function (params) {
        return new Promise(function (resolve, reject) {
            "use strict";
            Comment.find(params, function (error, comments) {
                if (error) {
                    reject(error)
                } else {
                  resolve(comments);
                }
            });
        });
    },

    getById: function (id) {
        return new Promise(function(resolve, reject) {
             Comment.findById(id, function (error, comment) {
                if (error) {
                    reject(error);
                } else {
                    resolve(comment);
                }
            });
        });
    },

    post: function (params) {
        return new Promise(function (resolve, reject) {
            Comment.create(params, function (error, comment) {
                if (error) {
                    reject(error);
                } else {
                    resolve(comment);
                }
            });
        });
    },

    put: function (id, params) {
        "use strict";
        return new Promise(function (resolve, reject) {
            Comment.findByIdAndUpdate(id, params, {new: true}, function (error, comment) {
                if(error) {
                    reject(error);
                } else {
                    resolve(comment);
                }
            });
        });
    }
};