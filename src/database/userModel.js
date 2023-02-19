const data = require("./users.json")
const fs = require('fs')

const getAllUsers = () => {
    return data.users;
}

const getOneUser = username => {
    return data.users[username]
}

const insertOneUser = user => {
    let savedName = user.username
    data.users[savedName] = user

    // Write to json
    fs.writeFileSync(
        './src/database/users.json',
        JSON.stringify(data, null, 2),{encoding: 'utf8'}
        ,
        err => {
            throw new Error('Error writing to file')
        }
    )
    return data.users[savedName]

}

const updateOneUser = (username, newUsername, newEmail, newPassword) => {
    const user = data.users[username]
    user.username = newUsername
    user.email = newEmail
    user.password = newPassword
    fs.writeFileSync(
        './src/database/users.json',
        JSON.stringify(data, null, 2),
        'utf-8',
        err => {
          throw new Error('Error writing to file')
        }
      )
      return user
}

const deleteOneUser = username =>{
    const user = data.users[username]
    delete data.users[username]

        // Delete userfrom json file
        fs.writeFileSync(
            './src/database/users.json',
            JSON.stringify(data, null, 2),
            'utf-8',
            err => {
                throw new Error('Error writing to file')
            }
        )
        return user
}

module.exports = {
    getAllUsers,
    getOneUser,
    insertOneUser,
    updateOneUser,
    deleteOneUser
}