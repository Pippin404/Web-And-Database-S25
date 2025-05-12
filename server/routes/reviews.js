//route the user! like the http// stuff



const express = require("express")
const Reviews = require("../models/reviews")
const router = express.Router()

router

//CRUD BACKEND DONE AND TESTED: getReviews, getUsersReviews, createReview

//async to get all reviews. 
.get('/getReviews', async (req, res) => {
  try {
    //console.log("get review in routes!")

    const returnReviews = await Reviews.getAllReviews()
    res.send(returnReviews)
    //console.log(req.body)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/getUsersReviews', async (req, res) => {
  try {
    //console.log("get User review in routes!")

    const returnReviews = await Reviews.getUsersReviews(req.body)
    //console.log(returnReviews);
    

    res.send(returnReviews)
    //console.log(req.body)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})


.post('/createReview', async (req, res) => {
  try {
      //console.log("creating review in routes!" + req.body)
      const newReview = await Reviews.createReview(req.body)
      res.status(201).json({ success: true, review: newReview || null }); 
    } catch(err) {
      res.status(401).send({message: err.message})
    }
})


.put('/updateReview', async (req, res) => {
  try {
    //console.log("updating review in routes!" + req.body)
    const updatedReview = await Reviews.updateReview(req.body)
    res.send(updatedReview) 
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/deleteReview', async (req, res) => {
  try {
    //console.log("deleting review in routes!" + req.body)
    const deletedReview = await Reviews.deleteReview(req.body)
    res.send(deletedReview) 
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})



module.exports = router