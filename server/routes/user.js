//route the user! like the http// stuff



const express = require("express")
const User = require("../models/user")
const router = express.Router()

router

//CRUD ROUTES TO MAKE: Create, Read, Update, Delete


//async to get all users. 
.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
    //console.log("routes getting users")

  } catch(err) {
    res.status(401).send({message: err.message})
  }
})







module.exports = router