import { setCurrentUser, getCurrentUser } from "./main.js"
let loginForm = document.getElementById('newReview')
loginForm.addEventListener('submit', newPost)


function newPost(e) {
    e.preventDefault()
  
    let rating = document.getElementById('rating').value
    let text = document.getElementById('text').value
  
    
  
    const post = {
      rating: rating,
      text: text
    }
    
    
    console.log(post)
    
    document.getElementById('rating').value = ""
    document.getElementById('text').value = ""
  }