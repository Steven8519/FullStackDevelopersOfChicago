"use strict";

/**
 * Created by stevenmcdonald on 3/6/17.
 */
var express = require("express");
var router = express.Router();
var controllers = require("../controllers/index");

router.get("/:resource", function (request, response, next) {
    var resource = request.params.resource;
    var controller = controllers[resource];

    if (controller == null) {
        response.json({
            conformation: "Error"
        });
    }
    controller.get(null, false).then(function (results) {
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
    var resource = request.params.resource;
    var id = request.params.id;

    var controller = controllers[resource];

    if (controller == null) {
        response.json({
            conformation: "Error"
        });
    }
    controller.getById(id).then(function (results) {
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
    var resource = request.params.resource;

    var controller = controllers[resource];
    if (controller == null) {
        response.json({
            conformation: "Error"
        });
    }
    controller.post(request.body).then(function (results) {
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
    var resource = request.params.resource;
    var id = request.params.id;

    var controller = controllers[resource];
    if (controller == null) {
        response.json({
            conformation: "Error",
            message: "File does not exist"
        });
    }
    controller.put(id, request.body).then(function (results) {
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
//# sourceMappingURL=api.js.map