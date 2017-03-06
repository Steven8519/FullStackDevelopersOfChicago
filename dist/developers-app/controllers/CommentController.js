"use strict";

/**
 * Created by stevenmcdonald on 3/6/17.
 */
var Comment = require("../models/comment");
var Promise = require("bluebird");

module.exports = {
    get: function get(params) {
        return new Promise(function (resolve, reject) {
            "use strict";

            Comment.find(params, function (error, comments) {
                if (error) {
                    reject(error);
                } else {
                    resolve(comments);
                }
            });
        });
    },

    getById: function getById(id) {
        return new Promise(function (resolve, reject) {
            Comment.findById(id, function (error, comment) {
                if (error) {
                    reject(error);
                } else {
                    resolve(comment);
                }
            });
        });
    },

    post: function post(params) {
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

    put: function put() {
        "use strict";

        return new Promise(function (resolve, reject) {
            Comment.findByIdAndUpdate(id, params, { new: true }, function (error, comment) {
                if (error) {
                    reject(error);
                } else {
                    resolve(comment);
                }
            });
        });
    }
};
//# sourceMappingURL=CommentController.js.map