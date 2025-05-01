//get the users!! CRUD functions here!!

//use mysql to get users
//send to routers

const con = require("./db_connect")


//creates the table
async function createTable() {
    let sql = `
    CREATE TABLE IF NOT EXISTS wdp_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE
    )`
    await con.query(sql) 
    
    }



createTable()


//CRUD TO DO: Create, Read, Update, Delete


// CRUD Operations. GET ALL!
async function getAllUsers() {

  //console.log("MYSQL Getting all users")
  let sql = `SELECT * FROM wdp_users`
  return await con.query(sql)
}

async function getUser(user) {
  let sql = `
    SELECT * FROM wdp_users 
    WHERE username = '${user.username}'
  `;
  return await con.query(sql);
}





async function createUser(user){

  let sql = `
    INSERT INTO wdp_users (username, email)
    VALUES ('${user.username}', '${user.email}')
  `;

  console.log("MYSQL Creating user: " + user.username + " " +  user.email)
  return await con.query(sql);
}


async function updateUser(user){
  let sql = `
    UPDATE wdp_users 
    SET username = '${user.username}', email = '${user.email}' 
    WHERE id = ${user.id}
  `;
    return await con.query(sql);

}


async function deleteUser(user){
  let sql = `
    DELETE FROM wdp_users 
    WHERE id = ${user.id}
  `;

  return await con.query(sql);
}


async function userExists(username) {
  let sql = `
    SELECT * FROM wdp_users
    WHERE Username="${username}"
  `
  return await con.query(sql)
}

// CREATE in CRUD - Registering a user

module.exports = { getAllUsers, createUser, updateUser, deleteUser, userExists, getUser }