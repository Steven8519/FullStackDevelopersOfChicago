"use strict";

/**
 * Created by stevenmcdonald on 3/6/17.
 */
var User = require("../models/user");
var Promise = require("bluebird");
var bcrypt = require("bcryptjs");

module.exports = {
    get: function get(params) {
        return new Promise(function (resolve, reject) {
            "use strict";

            User.find(params, function (error, users) {
                if (error) {
                    reject(error);
                } else {
                    resolve(users);
                }
            });
        });
    },

    getById: function getById(id) {
        return new Promise(function (resolve, reject) {
            User.findById(id, function (error, user) {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                }
            });
        });
    },
    post: function post(params) {
        return new Promise(function (resolve, reject) {
            var password = params.password;
            params["password"] = bcrypt.hashSync(password, 10);
            User.create(params, function (error, user) {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                }
            });
        });
    },

    put: function put() {
        return new Promise(function (resolve, reject) {
            User.findByIdAndUpdate(id, params, { new: true }, function (error, user) {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                }
            });
        });
    }
};
//# sourceMappingURL=UserController.js.map