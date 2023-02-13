const data = require('./boardgames.json')
const fs = require('fs')

const getAllBoardgames = () =>{
    return data.boardgames
}

const getOneBoardgame = id => {
    return data.boardgames[id]
}

const createOneBoardgame = boardgame => {
    data.boardgames[boardgame.id] = boardgame

    //Write game to json file
    fs.writeFile(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),
        'utf-8',
        err => {
            throw new Error('Error writing to file')
        }
    )
    return data.boardgames[boardgame.id]
}

const deleteOneBoardgame = id =>{
    const boardgame = data.boardgames[id]
    delete data.boardgames[id]

    // Delete game from json file
    fs.writeFile(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),
        'utf-8',
        err => {
            throw new Error('Error writing to file')
        }
    )
    return boardgame
}

const updateOneBoardgame = (name, newName, players, newPlayers, duration, newDuration, difficulty, newDifficulty) => {
    const boardgame = data.boardgames[id]
    boardgame.name = newName
    boardgame.players = newPlayers
    boardgame.duration = newDuration
    boardgame.difficulty = newDifficulty
    fs.writeFile(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),
        'utf8',
        err => {
          throw new Error('Error writing to file')
        }
      )
      return boardgame
}

module.exports = {
    getAllBoardgames,
    getOneBoardgame,
    createOneBoardgame,
    deleteOneBoardgame,
    updateOneBoardgame,
}