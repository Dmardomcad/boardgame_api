const data = require('./boardgames.json')
const fs = require('fs')

const getAllBoardgames = () =>{
    return data.boardgames
}

const getOneBoardgame = name => {
    return data.boardgames[name]
}

const createOneBoardgame = boardgame => {
    let savedName = boardgame.name.toLowerCase()
    savedName = savedName.replace(/ /g,"_")
    data.boardgames[savedName] = boardgame
    
    //Write game to json file
    fs.writeFileSync(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),{encoding: 'utf8'}
        ,
        err => {
            throw new Error('Error writing to file')
        }
    )
    return data.boardgames[savedName]
}

const deleteOneBoardgame = name =>{
    const boardgame = data.boardgames[name]
    delete data.boardgames[name]

    // Delete game from json file
    fs.writeFileSync(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),
        'utf-8',
        err => {
            throw new Error('Error writing to file')
        }
    )
    return boardgame
}

const updateOneBoardgame = (name, newName, newPlayers, newDuration,newDifficulty) => {
    const boardgame = data.boardgames[name]
    boardgame.name = newName
    boardgame.players = newPlayers
    boardgame.duration = newDuration
    boardgame.difficulty = newDifficulty
    fs.writeFileSync(
        './src/database/boardgames.json',
        JSON.stringify(data, null, 2),
        'utf-8',
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