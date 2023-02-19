const User = require("../database/userModel")
const { v4: uuidv4 } = require('uuid')

const getAllUsers = () => {
    const allUsers = User.getAllUsers()
    return allUsers
}

const getOneUser = username => {
    const user = User.getOneUser(username)
    return user
}

const insertOneUser = (username, email, password) => {
    const id = uuidv4()

    username = username.toLowerCase()

    const newUser = {
        id,
        username,
        email,
        password
    }
    // Check if user already exists
    if(User.getOneUser(newUser.username)){
        return false
    }
    const user = User.insertOneUser(newUser)
    return user

}

const deleteOneUser = id => {
    const user = User.deleteOneUser(id)
    return user
}

const updateOneUser = (id, username, newUsername, newEmail, newPassword) => {
    const user = User.updateOneUser(id, username, newUsername, newEmail, newPassword)
    return user
}

module.exports = {
    getAllUsers,
    getOneUser,
    insertOneUser,
    deleteOneUser,
    updateOneUser
}