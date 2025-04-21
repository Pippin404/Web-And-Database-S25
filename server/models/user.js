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

// CRUD Operations. GET ALL!
async function getAllUsers() {

  //console.log("MYSQL Getting all users")
  let sql = `SELECT * FROM wdp_users`
  return await con.query(sql)
}




async function userExists(username) {
  let sql = `
    SELECT * FROM wdp_users
    WHERE Username="${username}"
  `
  return await con.query(sql)
}

// CREATE in CRUD - Registering a user

module.exports = { getAllUsers }