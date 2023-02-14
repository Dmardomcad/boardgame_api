const express = require("express")
const router = express.Router()
const usersController = require ('../../controllers/usersController')

/* router
    .route("/")
    .get(usersController.getAllUsers)
    .post(usersController.insertOneUser)
router.route("/:user")
    .get(usersController.getOneUser)
    .delete(usersController.deleteOneUser)
    .put(usersController.updateOneUser)

module.exports.router = router */