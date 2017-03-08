/**
 * Created by stevenmcdonald on 3/6/17.
 */
const User = require("../models/user");
const Promise = require("bluebird");
const bcrypt = require("bcryptjs");

module.exports = {
    get: function (params, isRaw) {
        return new Promise(function (resolve, reject) {
            "use strict";
            User.find(params, function (error, users) {
                if (error) {
                    reject(error)
                } else {

                    if(isRaw == true) {
                        resolve(users);
                    } else {
                        var list = [];
                        for (var i = 0; i < users.length; i++) {
                            let user = users[i];
                            list.push(user.summary());

                        }
                        resolve(list);
                    }
                }
            });
        });
    },

    getById: function (id) {
            return new Promise(function(resolve, reject) {
            User.findById(id, function (error, user) {
                if (error) {
                    reject(error);
                } else {
                    resolve(user.summary());
                }
            });

        });
    },
    post: function (params) {
        return new Promise(function (resolve, reject) {
            const password = params.password;
            params["password"] = bcrypt.hashSync(password, 10);
            User.create(params, function (error, user) {
                if (error) {
                    reject(error);
                } else {
                    resolve(user.summary());
                }
            });
        });
    },

    put: function (id, params) {
        return new Promise(function (resolve, reject) {
            User.findByIdAndUpdate(id, params, {new: true}, function (error, user) {
                if(error) {
                    reject(error);
                } else {
                    resolve(user.summary());
                }
            });
        });
    }
};
