/**
 * Created by stevenmcdonald on 3/6/17.
 */
const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.get("/:resource", function (request, response, next) {
    const resource = request.params.resource;
    const controller = controllers[resource];

    if(controller == null) {
        response.json({
            conformation: "Error",
        });
    }
    controller.get(null).then(function (results) {
            response.json({
                conformation: "success",
                results: results
            });
        }).catch(function (error) {
            response.json({
                conformation: "Error",
                results: error
            });
        });
    });

router.get("/:resource/:id", function (request, response, next) {
    const resource = request.params.resource;
    const id = request.params.id;

    const controller = controllers[resource];

    if(controller == null) {
        response.json({
            conformation: "Error",
        });
    }
    controller.getById(id)
        .then(function (results) {
        response.json({
            conformation: "success",
            results: results
        });
    }).catch(function (error) {
        response.json({
            conformation: "Error",
            results: error
        });
    });
});

router.post("/:resource", function (request, response, next) {
    const resource = request.params.resource;

    const controller = controllers[resource];
    if(controller == null) {
        response.json({
            conformation: "Error",
        });
    }
    controller.post(request.body)
        .then(function (results) {
            response.json({
                conformation: "success",
                results: results
            });
        }).catch(function (error) {
        response.json({
            conformation: "Error",
            results: error
        });
    });
});

router.put("/:resource/:id", function (request, response, next) {
   const resource = request.params.resource;
   const id = request.params.id;

    const controller = controllers[resource];
    if(controller == null) {
        response.json({
            conformation: "Error",
            message: "File does not exist"
        });
    }
    controller.put(id, request.body)
        .then(function (results) {
            response.json({
                conformation: "success",
                results: results
            });
        }).catch(function (error) {
        response.json({
            conformation: "Error",
            results: error
        });
    });
});

module.exports = router;
