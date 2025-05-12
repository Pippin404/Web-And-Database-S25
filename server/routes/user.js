//route the user! like the http// stuff



const express = require("express")
const User = require("../models/user")
const router = express.Router()

router


//CRUD TESTED: getUsers, getUser, Register. (backend w/ postman)

//GET ALL USERS
.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
    //console.log("routes getting users")

  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//GET SINGLE USER
.post('/getUser', async (req, res) => {
  try {
    const users = await User.getUser(req.body)
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//CREATE NEW USER
.post('/register', async (req, res) => {
  try {
    const user = await User.createUser(req.body)
    //console.log("User creating in routes. /register")
    res.send(user) //REMOVED THE {}
    //returned the user created!! :D
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//UPDATE USER
.put('/update', async (req, res) => {
  try {
    //console.log(req.body)
    const user = await User.updateUser(req.body)
    res.send(user)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


//DELETE USER 
.delete('/deleteAccount', async (req, res) => {
  try {
    await User.deleteUser(req.body)
    res.send({success: "User Deleted"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})





module.exports = router