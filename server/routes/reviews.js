//route the user! like the http// stuff



const express = require("express")
const Reviews = require("../models/reviews")
const router = express.Router()

router


//async to get all reviews. 
.get('/getReviews', async (req, res) => {
  try {

    console.log("Attempt for models.js to get reviews")
    const returnReviews = await Reviews.getAllReviews()
    res.send(returnReviews)
    console.log("models.js got reviews")

  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router