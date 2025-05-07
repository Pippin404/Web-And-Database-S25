let loginForm = document.getElementById('register')
loginForm.addEventListener('submit', registerFunction)
import { fetchData } from "./main.js"

function registerFunction(e) {
    e.preventDefault()
  
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    
    const user = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      password: password
    }
    
    
    console.log(user)

    
    document.getElementById('fname').value = ""
    document.getElementById('lname').value = ""
    document.getElementById('username').value = ""
    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
  


    fetchData("/users/register", user, "POST")
    .then(data => {
      if(!data.message) {
        console.log("User created")
        console.log(data)
      }
    })
    .catch(err => {
      console.log(err)
      
    })



    
  }  

  //fname, lname, username, email, password