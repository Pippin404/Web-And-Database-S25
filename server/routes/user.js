//route the user! like the http// stuff



const express = require("express")
const User = require("../models/user")
const router = express.Router()

router


//async to get all users. 
.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router