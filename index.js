let loginForm = document.getElementById('newReview')
loginForm.addEventListener('submit', newPost)

function newPost(e) {
    e.preventDefault()
  
    let title = document.getElementById('title').value
    let rating = document.getElementById('rating').value
    let text = document.getElementById('text').value
  
    
  
    const post = {
      title: title,
      rating: rating,
      text: text
    }
    
    
    console.log(post)
    
    document.getElementById('title').value = ""
    document.getElementById('rating').value = ""
    document.getElementById('text').value = ""
  
  }

  //title, rating, text