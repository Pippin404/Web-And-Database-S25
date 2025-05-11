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
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    )`
    await con.query(sql) 
    
    }



createTable()




//Get all
async function getAllUsers() {
  //console.log("MYSQL Getting all users")
  let sql = `SELECT * FROM wdp_users`
  return await con.query(sql)
}

//get one
async function getUser(user) {
  //console.log("MYSQL Getting user " + user.id)
  let sql = `
    SELECT * FROM wdp_users 
    WHERE email = '${user.email}'
  `;
  return await con.query(sql);
}




//Create, and return it
async function createUser(user){

  let sql = `
    INSERT INTO wdp_users (username, email, password)
    VALUES ('${user.username}', '${user.email}', '${user.password}')
  `;
  await con.query(sql) //CREATE USER IN MYSQL
  //console.log("CREATING USER IN MODELS. Using mysql. " + user.username + " " + user.email)
  const cUser = await getUser(user) //RETRUVE USER
  return cUser[0]
}

//Update
async function updateUser(user){
  let sql = `
    UPDATE wdp_users 
    SET username = '${user.username}', email = '${user.email}' 
    WHERE id = ${user.id}
  `;
    return await con.query(sql);

}

//Delete
async function deleteUser(user){
  let sql = `
    DELETE FROM wdp_users 
    WHERE id = ${user.id}
  `;

  return await con.query(sql);
}

//userExists
async function userExists(user) {
  let sql = `
    SELECT * FROM wdp_users
    WHERE Username="${user.username}"
  `
  return await con.query(sql)
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser, userExists, getUser }