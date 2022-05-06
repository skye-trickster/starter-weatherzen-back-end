const router = require("express").Router({ mergeParams: true });
const controller = require("./observations.controller.js");
const methodNotAllowed = require("../errors/methodNotAllowed");

// don't crate the controller and router just yet. this is here at this step for testing to ensure that the comunication works before going too deep
router.route("/")
    .post(controller.create)
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router;