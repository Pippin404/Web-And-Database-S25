//route the user! like the http// stuff



const express = require("express")
const Reviews = require("../models/reviews")
const router = express.Router()

router

//CRUD ROUTES TO MAKE: Create, Read, Update, Delete

//async to get all reviews. 
.get('/getReviews', async (req, res) => {
  try {

    console.log("Attempt for models.js to get reviews")
    const returnReviews = await Reviews.getAllReviews()
    res.send(returnReviews)
    console.log(req.body)

  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router