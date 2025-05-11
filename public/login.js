import { fetchData } from "./main.js"
import { setCurrentUser } from "./main.js"

let loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault()
  
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    
  
    const user = {
      email: email,
      username: "",
      password: password
    }
    
    
    console.log(user)

    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
  

    //CHECK IF USER EXISTS IN MYSQL


    setCurrentUser(user);
    window.location.href = "home.html";


  }