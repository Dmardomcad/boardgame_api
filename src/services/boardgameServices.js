const boardgamesModel = require('../database/boardgameModel')
const { v4: uuidv4 } = require('uuid')

const getAllBoardgames = () => {
    const boardgames = boardgamesModel.getAllBoardgames()
    return boardgames
}

const createOneBoardgame = () => {

}

const getOneBoardgame = id => {

}

const deleteOneBoardgame = id => {

}

const updateOneBoardgame = () => {

}

module.exports ={
    getAllBoardgames,
    createOneBoardgame,
    getOneBoardgame,
    deleteOneBoardgame,
    updateOneBoardgame,
}