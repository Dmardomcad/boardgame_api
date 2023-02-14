const boardgamesServices = require('../services/boardgameServices')


const getAllBoardgames = (req, res, next)=>{
    const allBoardgames = boardgamesServices.getAllBoardgames()
    if(!allBoardgames){
        res.status(404).send('No games found')
        return
    }
    res.send(allBoardgames)
}

const createOneBoardgame = (req, res, next)=>{

    const { name, players, duration, difficulty} = req.body
    console.log(req.body)
    if( !name || !players || !duration || !difficulty) {
        res.status(400).send('Attribute missing')
        return
    }
    const newBoardgame = boardgamesServices.createOneBoardgame(name, players, duration, difficulty)
    if(!newBoardgame){
        res.status.send('Game not created')
        return
    }
    res.send(newBoardgame)
}

const getOneBoardgame = (req, res, next) => {
    const { game } = req.params
    
    const oneBoardGame = boardgamesServices.getOneBoardgame(game)
    if (!oneBoardGame) {
        res.status(404).send('Boardgame not found')
        return
    }
    res.send(oneBoardGame)
}

const deleteOneBoardgame = (req, res, next) => {
    const { game } = req.params
    const oneBoardGame = boardgamesServices.deleteOneBoardgame(game)
    if (!oneBoardGame){
        res.status(404).send('Boardgame not found')
    }
    res.send(oneBoardGame)
}

const updateOneBoardgame = (req, res, next) => {
    const { game } = req.params
    const { name, players, duration, difficulty } = req.body
    if ( !name || !players || !duration || !difficulty){
        res.status(400).send('Missing attribute for the game')
        return
    }
    const oneBoardGame = boardgamesServices.updateOneBoardgame(game, name, players, duration, difficulty)
    if(!oneBoardGame){
        res.status(404).send('Game not found')
        return
    }
    res.send(oneBoardGame)
}

module.exports = {
    getAllBoardgames,
    createOneBoardgame,
    getOneBoardgame,
    deleteOneBoardgame,
    updateOneBoardgame
}