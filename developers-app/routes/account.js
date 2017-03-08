/**
 * Created by stevenmcdonald on 3/8/17.
 */
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const bcrypt = require("bcryptjs");

router.post("/:action", function (request, response, next) {
    const action = request.params.action;

        if(action == "login") {
            const  email = request.body.email;
            UserController.get({ email: email}, true)
                .then(function (users) {
                    if (users.length == 0) {
                        response.json({
                            conformation: "Error",
                            message: "No such user"
                        });
                    } else {
                        const user = users[0];
                        const password = request.body.password;

                        // Check password
                        const passwordCheck = bcrypt.compareSync(password, user.password);
                        if(passwordCheck == false) {
                            response.json({
                                conformation: "Error",
                                message:"Incorrect Password."
                            })
                        }

                        response.json({
                            conformation: "success",
                            user: user
                        });
                    }
                })
                .catch();
        }
});

module.exports = router;
