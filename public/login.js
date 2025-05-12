import { fetchData, getCurrentUser, removeCurrentUser, setCurrentUser } from "./main.js"

let loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault()
  
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    
  
    let user = {
      email: email,
      username: "USER'S NAME HERE",
      password: password
    }
    
    
    console.log(user)

    document.getElementById('email').value = ""
    document.getElementById('password').value = ""
  

    //CHECK IF USER EXISTS IN MYSQL
    fetchData("/users/getUser", user, "POST")
      .then(data => {
        if(!data.message) {
          user= data[0]
          if(user==undefined){
            let error = document.getElementById('errorSection')
            error.innerHTML = `<p style="color: red;">User Does not Exist</p>`
            removeCurrentUser()
          }else{
            console.log(user)
            setCurrentUser(user);
            window.location.href = "home.html";
          }
        }
      })
      .catch(err => {
        console.error("Error logging in:", err)
      })

      


  }