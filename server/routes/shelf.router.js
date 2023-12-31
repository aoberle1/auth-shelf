const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/',  (req, res) => {
    pool.query(`SELECT * FROM "item";`)

      // console.log([sqlText])

      .then(results => {
        console.log(results.rows)
        res.send(results.rows)
      })
      .catch(err => {
        console.log('SERVER SIDE ERROR', err)
        res.sendStatus(500)
      })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  
  let dataPackage = [req.body.description, req.body.image_url, req.user.id];
  console.log(dataPackage);
  let queryText = `
    INSERT INTO item
    ("description", "image_url", "user_id")
    VALUES
    ($1, $2, $3)
    `;
    pool.query(queryText, dataPackage)
.then(result => {
  res.sendStatus(200)
  
}).catch(err => {
  console.log('oh no POST SERVER', err)
  res.sendStatus(500)
})
})

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
  //making sure my current user's id, the item's id, and the 'item.user_id' are all correct.
  // console.log('req.body.itemUserId =>', req.body.itemUserID);
  console.log('req.params.id =>', req.params.id);
  console.log('should be the current user id =>', req.user.id);
  console.log('req.body from DELETE request is:', req.body.user_id);

  //conditional to make sure the user is authenticated, user is registered, and the user.id matches the item.user_id
  // => the only person who can delete an item is the one who added it.
  if(req.isAuthenticated() && req.user.id && req.user.id===req.body.user_id){
    //the delete query
    let queryText = `DELETE FROM item WHERE id = $1`;
    pool.query(queryText, [req.params.id])
      .then(response =>{
        res.sendStatus(200);
      }).catch(error =>{
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403); //user either wasn't registered OR they weren't the person who added that item
  }
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
