/**
 * Created by stevenmcdonald on 3/8/17.
 */
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const bcrypt = require("bcryptjs");

router.get("/:action", function(request, response, next){
    const action = request.params.action;

    if (action == "logout"){
        request.session.reset();
        response.json({
            confirmation: "success"
        });
    }

    if (action == "currentuser"){ // check if user logged in
        if (request.session == null){
            response.json({
                confirmation: "Error",
                message: "User not logged in"
            });
        } else if (request.session.user == null){
            response.json({
                confirmation: "Error",
                message: "User not logged in"
            });
        } else {

            const userId = request.session.user;
            UserController.getById(userId)
                .then(function (user) {
                    response.json({
                        confirmation: "success",
                        user: user
                    });
                })
                .catch(function (error) {
                    response.json({
                        confirmation: "Error",
                        message: error
                    });
                });
            }
        }
    });

router.post("/:action", function(request, response, next){
    const action = request.params.action;

    if (action == "register"){
        UserController.post(request.body)
            .then(function(user){

                request.session.user = user.id;
                response.json({
                    confirmation: "success",
                    user: user
                });
            })
            .catch(function(error){
                response.json({
                    confirmation:"Error",
                    message: error
                });
            });
    }


    if (action == "login"){
        const email = request.body.email;
        UserController.get({email:email}, true)
            .then(function(users){
                if (users.length == 0){
                    response.json({
                        confirmation:"Error",
                        message:"User does not exist"
                    });

                    return
                }

                const user = users[0];
                const password = request.body.password;

                // Check password
                const passwordCorrect = bcrypt.compareSync(password, user.password);
                if (passwordCorrect == false){
                    response.json({
                        confirmation:'Error',
                        message:"Incorrect Password"
                    });

                    return
                }

                request.session.user = user._id;

                response.json({
                    confirmation: "success",
                    profile: user.summary()
                });

            })
            .catch(function(error){
                response.json({
                    confirmation:"Error",
                    message: error
                });
            });
        }
});

module.exports = router;
