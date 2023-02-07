const express = require("express")
const router = express.Router()
const boardgamesController = require("../../controllers/boardgamesController")

router
    .route("/")
    .get(boardgamesController.getAllBoardgames)
    .post(boardgamesController.createOneBoardgame)

router.route("/:boardgame")
    .get(boardgamesController.getOneBoardgame)
    .delete(boardgamesController.deleteOneBoardgame)
    .put()

module.exports.router = router