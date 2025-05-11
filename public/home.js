import { setCurrentUser, getCurrentUser } from "./main.js"


//Welcome text??
let currentUser = getCurrentUser()
let welcome = document.getElementById('welcometxt')
if(currentUser){
  welcome.innerHTML = `Welcome ${currentUser.username}`
}


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

let form = document.getElementById('loggedInForm')
if(form && currentUser){
    form.innerHTML = `
      <div class="post">
        <h2 class="postTitle">New Review</h2>
        <form action="/submit-post" method="post" id="newReview">

          <div class="field">
            <div class="control">
                <input class="input" type="number" name="rating" placeholder="Rating (1-10)" min="1" max="10" id="rating">
            </div>
          </div>


          <div class="field">
            <div class="control">
              <textarea class="textarea" name="content" placeholder="Write your post here" id="text"></textarea>
            </div>
          </div>



          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit" id="submit" >Submit</button>
            </div>

            <div class="control">
              <button class="button is-link is-light" type="reset">Cancel</button>
            </div>



          </div>
        </form>
    </div>
    `
}


let loginForm = document.getElementById('newReview')
if(loginForm) loginForm.addEventListener('submit', newPost)


let userReviews = document.getElementById('userReviews')
if (userReviews && currentUser){
  userReviews.innerHTML = `
  <div class="post-container">
    <div class="post">
      <h2 class="postTitle">Your Reviews</h2>
      <p class="postContent">This is where your reviews live</p>
    </div>
  </div>
  `
}