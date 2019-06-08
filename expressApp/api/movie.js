var express = require('express');
var router = express.Router();
var movieService = require('../services/moviedbService');
var movieList=[{id:1,name:'indira',year:2000},{id:2,name:'kritika',year:2001}]


router.get('/', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    movieService.getMovies(callback);
  });

  router.post('/', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movie = req.body;
    movieService.addMovie(movie, callback);
  });
  
  router.delete('/:id', function(req, res, next) {
    var callback = function(result){
      res.send({'result':result});
    }
    var movieId = req.params.id;
    movieService.deleteMovie(movieId,callback);
  });
  
  router.get('/:id', function(req, res, next) {
    var callback = function(movie){
      res.send(movie);
    }
    var movieId = req.params.id;
    var movie = movieService.getMovieById(movieId,callback);
  });
  
  router.put('/:id', function(req, res, next) {
    var callback = function(result){
      res.send(result);
    }
    var movieId = req.params.id;
    var movie = req.body;
    movieService.updateMovie(movie,callback);
  });



module.exports = router;