// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if (response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}



//local storage
// local storage functions
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}
// example accessing userId for second entity
// let currentUser = getCurrentUser()
// let userId = currentUser.userId

export function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location.href = "index.html"
}



//----------------------------------------------------------------
//NAVBAR!
document.getElementById("ExportedNav").innerHTML=`
  <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
  
            <a class="navbar-item" href="home.html">
              Home
            </a>
  
            <a class="navbar-item" href="following.html">
              Following
            </a>
  
            <a class="navbar-item" href="login.html">
              Login
            </a>

            <a class="navbar-item" href="register.html">
              Register
            </a>
  
        </div>
      </nav>
`