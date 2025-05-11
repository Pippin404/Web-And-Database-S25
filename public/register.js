import { fetchData } from "./main.js"
import { setCurrentUser } from "./main.js"
let loginForm = document.getElementById('register')
loginForm.addEventListener('submit', registerFunction)



function registerFunction(e) {
    e.preventDefault()
  
    console.log("registerFunction called");

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    
    const user = {
      username: username,
      email: email,
      password: password
    }
    
    
    console.log(user)

    
    document.getElementById('username').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
  


    fetchData("/users/register", user, "POST")
      .then(data => {
        if(!data.message) {
          console.log("User registered successfully")
          setCurrentUser(data)
          window.location.href = "home.html"
        }
      })
      .catch(err => {
        console.error("Error registering user:", err)
      })


      setCurrentUser(user);
      window.location.href = "home.html";

    
  }  

  //fname, lname, username, email, password