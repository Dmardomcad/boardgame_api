const express = require("express")
const router = express.Router()
const usersController = require ("../../controllers/usersControllers")

router
    .route("/")
    .get(usersController.getAllUsers)
    .post(usersController.insertOneUser)
router.route("/:user")
    .get(usersController.getOneUser)
    .delete(usersController.deleteOneUser)
    .put()

module.exports.router = router