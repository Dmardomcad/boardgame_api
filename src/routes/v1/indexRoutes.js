const express = require('express')
const router = express.Router()
const boardgamesRoutes = require ('./boardgamesRoutes')
const usersRoutes = require ('./usersRoutes')

/* router.get("/", (req,res, next)=>{
    res.send("Hola mundo")
}) */

router.use('/boardgames', boardgamesRoutes.router)
router.use("/users", usersRoutes.router)

module.exports.router = router