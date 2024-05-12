const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) =>{
  const movieID=req.params.id; 
  const sqlText = `
  SELECT * FROM "genres"
    INNER JOIN "movies_genres"
      ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies_genres"."movie_id" = $1
  ORDER BY "movies_genres"."id"
  `
  pool.query(sqlText, [movieID])
    .then((result) => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.log('error in GET route for genres', error);
      res.sendStatus(500)
    })
})



//STRETCH
router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

module.exports = router;