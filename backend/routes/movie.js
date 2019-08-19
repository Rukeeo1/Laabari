const express = require('express');
const router = express.Router();
 
const {MovieModel} = require('../models/movies');
console.log(MovieModel,'hello')

router.get('/:id', async (req,res) => {
    const movie = await MovieModel.findById(req.params.id);
    console.log(movie)
    res.json(movie)
})

module.exports = router;