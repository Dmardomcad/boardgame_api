const userService = require ("../services/userService")

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers()
    if (!allUsers){
        res.status(404).send('No users found')
        return
    }
    res.satus(200).send(allUsers)
}

const getOneUser = (req, res) => {
    const { user } = req.params

    const oneUser = userService.getOneUser(user)
    if (!oneUser) {
        res.status(404).send('User not found')
        return
    }
    res.status(200).send(oneUser)

}

const insertOneUser = (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400).send('Attribute missing')
        return
    }
    const newUser = userService.insertOneUser(username, email, password)
    if(!newUser){
        res.status(400).send('User not created')
        return
    }
    res.status(200).send(newUser)
}


const updateOneUser = (req, res) => {
    const { user } = req.params
    const { username, email, password } = req.body
    if (!username || !email || !password){
        res.status(400).send('Missing attribute for the user')
        return
    }
    const oneUser = userService.updateOneUser(user, username, email, password)
    if(!oneUser){
        res.status(404).send('User not found')
        return
    }
    res.status(200).send(oneUser)
}


const deleteOneUser = (req, res) => {
    const { user } = req.params
    const oneUser = userService.deleteOneUser(user)
    if(!oneUser){
        res.status(404).send('User not found')
    }
    res.status(200).send(oneUser)
}

module.exports = {
    getAllUsers,
    getOneUser,
    insertOneUser,
    updateOneUser,
    deleteOneUser
}