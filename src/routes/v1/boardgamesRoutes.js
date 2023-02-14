const express = require('express')
const router = express.Router()
const boardgamesController = require('../../controllers/boardgamesController')

router
    .route('/')
    .get(boardgamesController.getAllBoardgames)
    .post(boardgamesController.createOneBoardgame)

router
    .route('/:game')
    .get(boardgamesController.getOneBoardgame)
    .delete(boardgamesController.deleteOneBoardgame)
    .put(boardgamesController.updateOneBoardgame)

module.exports.router = router