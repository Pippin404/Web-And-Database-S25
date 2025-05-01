
const con = require("./db_connect")


//creates the reviews table
async function createReviewsTable() {
    let sql = `
    CREATE TABLE IF NOT EXISTS wdp_reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    rating INT NOT NULL,
    review_text VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES wdp_users(id) ON DELETE CASCADE)
    `
    await con.query(sql) 
    
    }

createReviewsTable()


//CRUD TO DO: Create, Read, Update, Delete

// CRUD Operations. GET ALL!
async function getAllReviews() {
    createReviewsTable()
    console.log("MYSQL Getting all reviews")
    let sql = `SELECT * FROM wdp_reviews`
    
    return await con.query(sql)
}

module.exports = { getAllReviews }