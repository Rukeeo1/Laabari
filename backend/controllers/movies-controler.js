const {MovieModel} = require('../models/movies');

 async function findMovie(query) {
  return MovieModel.find({
    $or: [
      { title: query.title },
      { year: query.year },
      { genre: query.genre }
      //   { phone: query }
    ]
  });
  console.log(query, 'i am the one');
}

findMovie({title:'hello us'}).then(res=>{
    console.log(res,'hello')
}).catch(err => {
    console.log(err)
})
exports.findMovie = findMovie