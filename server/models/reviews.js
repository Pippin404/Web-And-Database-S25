
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


//CRUD TO DO: Need to test this!
//READ
async function getAllReviews() {
    createReviewsTable()
    console.log("MYSQL Getting all reviews")
    let sql = `SELECT * FROM wdp_reviews`
    
    return await con.query(sql)
}


//READ
async function getUsersReviews(user) {
    let sql = `
    SELECT * FROM wdp_reviews 
    WHERE user_id = '${user.id}'
    `;
    console.log("MYSQL Getting all reviews for user " + user.id)
    return await con.query(sql)    

}


//CREATE
async function createReview(user, review){
    let sql = `
    INSERT INTO wdp_reviews (user_id, rating, review_text)
    VALUES ('${user.user_id}', '${review.rating}', '${review.review_text}')
    `;
    console.log("CREATING REVIEW IN MODELS. Using mysql. " + user.user_id + " " + review.rating + " " + review.review_text)
    await con.query(sql)
  }
  







  //UPDATE
  async function updateReview(review){
    let sql = `
    UPDATE wdp_reviews 
    SET rating = '${review.rating}', review_text = '${review.review_text}'
    WHERE id = '${review.id}'
  `;
    console.log("UPDATING REVIEW IN MODELS. Using mysql. " + review.id + " " + review.rating + " " + review.review_text)
    await con.query(sql)
  }
  
  //DELETE!!
  async function deleteReview(review){
    let sql = `
    DELETE FROM wdp_reviews 
    WHERE id = '${review.id}'
  `;
    console.log("DELETING REVIEW IN MODELS. Using mysql. " + review.id)
    await con.query(sql)
  }




module.exports = { getAllReviews, createReview, updateReview, deleteReview, getUsersReviews}