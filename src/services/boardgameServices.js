const boardgamesModel = require('../database/boardgamesModel')
const { v4: uuidv4 } = require('uuid')

const getAllBoardgames = () => {
    const boardgames = boardgamesModel.getAllBoardgames()
    return boardgames
}

const createOneBoardgame = (name, players, duration, difficulty) => {
    const id = uuidv4()

    name = name.toLowerCase()

    const newBoardgame = {
        id,
        name,
        players,
        duration,
        difficulty
    }
    // Check if product already exists
    if(boardgamesModel.getOneBoardgame(newBoardgame.name)){
        return false
    }
    const boardgame = boardgamesModel.createOneBoardgame(newBoardgame)

    return boardgame
}

const getOneBoardgame = name => {
    const boardgame = boardgamesModel.getOneBoardgame(name)
    return boardgame
}

const deleteOneBoardgame = id => {
    const boardgame = boardgamesModel.deleteOneBoardgame(id)
    return boardgame
}

const updateOneBoardgame = (name, newName, newPlayers, newDuration, newDifficulty) => {
    const boardgame = boardgamesModel.updateOneBoardgame(name, newName, newPlayers, newDuration, newDifficulty)
    return boardgame
}

module.exports ={
    getAllBoardgames,
    createOneBoardgame,
    getOneBoardgame,
    deleteOneBoardgame,
    updateOneBoardgame,
}