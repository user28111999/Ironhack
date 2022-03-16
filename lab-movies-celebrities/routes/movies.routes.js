const router = require("express").Router()

const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")


router.get("/movies", (req, res) => {
  Movie.find()
    .then((data) => res.render("movies/movies", { data }))
    .catch((error) => console.error(error))
})

router.get("/movies/:id", (req, res) => {
  Promise.all([
    Movie.findById(req.params.id),
    Celebrity.find()
  ])
    .then((data) => {
      res.render("movies/movie-details", { 
        movie: data[0],
        celebs: data[1]  
      })
    })
    .catch((err) => console.error(err))
})

router.get("/movies/create", (req, res) => {
  Celebrity.find()
    .then((data) => res.render("movies/new-movie", { data }))
    .catch((error) => console.error(error))
})

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body

  Movie.create({ title, genre, plot, cast })
    .then(() => res.redirect("/movies"))
    .catch(() => res.redirect("/movies/create"))
})

router.get("/movies/:id/edit", (req, res) => {
  Promise.all([
    Movie.findById(req.params.id),
    Celebrity.find()
  ])
    .then((data) => {
      res.render("movies/edit-movie", { 
        movie: data[0],
        celebs: data[1]  
      })
    })
    .catch((err) => console.error(err))
})

router.post("/movies/:id/edit", (req, res) => {
  Movie
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect(`/movies/${req.params.id}`))
    .catch(err => console.error(err))
})

router.post("/movies/:id/delete", (req, res) => {
  Movie
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/movies"))
    .catch(err => console.error(err))
})

module.exports = router
