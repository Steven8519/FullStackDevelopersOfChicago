/**
 * Created by stevenmcdonald on 3/6/17.
 */
const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/:resource", function (request, response, next) {
    const resource = request.params.resource;
    if (resource == "user") {
        User.find(null, function (error, results) {
            if (error) {
                response.json({
                    conformation: "Error",
                    message: error
                });
                return
            }

            response.json({
                conformation: "success",
                results: results
            });
        });
    }
});

router.get("/:resource/:id", function (request, response, next) {
   const resource = request.params.resource;
   const id = request.params._id;

   if(resource == "user") {
       User.findById(id, function (error, result) {
          if(error) {
              response.json({
                  conformation: "Error",
                  result: result
              });
              return
          }
          response.json({
              conformation: "success",
              result: result
          });
       });
   }
});

router.post("/:resource", function (request, response, next) {
    const resource = request.params.resource;
    if(resource == "user") {
        User.create(request.body, function (error, result) {
            if(error) {
                response.json({
                    conformation: "Error",
                    message: result
                });
                return
            }
            response.json({
                conformation: "success",
                result: result
            });
        });
    }
});

module.exports = router;
