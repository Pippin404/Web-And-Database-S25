import { setCurrentUser, getCurrentUser, fetchData } from "./main.js"


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
    let title = document.getElementById('title').value
    
    let user = getCurrentUser()

    const postToSend = {
      title: title,
      rating: rating,
      review_text: text,
      user_id: user.id
    }
    
    /*
    //postman testing
    {
      "title": "Yayyy",
      "rating": "5",
      "review_text": "NewRevview",
      "user_id": 1
    }
    
    */

        fetchData("/reviews/createReview", postToSend, "POST")
          .then(data => {
            if(!data.message) {
              console.log("Created post!")
              
            }
          })
          .catch(err => {
            console.error("Error w/ Creating post:", err)
          })
  
    console.log(postToSend)
    
    document.getElementById('rating').value = ""
    document.getElementById('title').value = ""
    document.getElementById('text').value = ""

    //Will show the new post created!
    window.location.reload()

  }







let form = document.getElementById('loggedInForm')
if(form && currentUser){
    form.innerHTML = `
      <div class="post">
        <h2 class="postTitle">New Review</h2>
        <form action="/submit-post" method="post" id="newReview">

          <div class="field">
            <div class="control">
              <textarea class="input" name="title" placeholder="Title" id="title"></textarea>
            </div>
          </div>



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
  <p>Here are your reviews:</p>
  `
  //FETCH THE USER'S POSTS

  let user = getCurrentUser();

  fetchData("/reviews/getUsersReviews", user, "POST")
    .then(data => {
      if (!data.message) {
        const container = document.getElementById('reviews-container');
        container.innerHTML = ''; // Clear existing content

        // Create a new container for the posts
        const postContainer = document.createElement('div');
        postContainer.className = 'post-container'; // Apply the post-container class

        data.forEach(review => {
          const post = document.createElement('div');
          post.className = 'post'; // Add the class to the individual post

          post.innerHTML = `
            <h3>${review.title || 'Untitled Review'}</h3>
            <p>${review.rating || '0'}</p>
            <p>${review.review_text || 'No content available.'}</p>
          `;

          postContainer.appendChild(post); // Append each post to the postContainer
        });

        container.appendChild(postContainer); // Finally append the postContainer to the main container
      } else {
        console.warn("Server responded with a message:", data.message);
      }
    })
    .catch(err => {
      console.error("Error fetching user reviews:", err);
    });


}