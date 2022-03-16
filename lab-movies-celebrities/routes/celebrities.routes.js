const router = require("express").Router()

const Celebrity = require("../models/Celebrity.model")

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((data) => res.render("celebrities/celebrities", { data }))
    .catch((error) => console.error(error))
})

router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect("/celebrities"))
    .catch(err => console.error(err))
})

module.exports = router