"use strict";

/**
 * Created by stevenmcdonald on 3/8/17.
 */
var express = require("express");
var router = express.Router();
var UserController = require("../controllers/UserController");
var bcrypt = require("bcryptjs");

router.post("/:action", function (request, response, next) {
    var action = request.params.action;

    if (action == "login") {
        var email = request.body.email;
        UserController.get({ email: email }, true).then(function (users) {
            if (users.length == 0) {
                response.json({
                    conformation: "Error",
                    message: "No such user"
                });
            } else {
                var user = users[0];
                var password = request.body.password;

                // Check password
                var passwordCheck = bcrypt.compareSync(password, user.password);
                if (passwordCheck == false) {
                    response.json({
                        conformation: "Error",
                        message: "Incorrect Password."
                    });
                }

                response.json({
                    conformation: "success",
                    user: user
                });
            }
        }).catch();
    }
});

module.exports = router;
//# sourceMappingURL=account.js.map