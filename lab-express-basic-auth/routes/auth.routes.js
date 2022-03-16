const router = require("express").Router()
const bcryptjs = require("bcryptjs")

const saltRounds = 10

const User = require("../models/User.model")

router.get("/auth/register", (req, res) => {
  res.render("auth/register")
})

router.post("/auth/register", (req, res, next) => {
  const { username, password } = req.body

  const errMsg = [
    "All fields are mandatory. Please provide your username and password.",
    "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    "You must provide an username."
  ]

  if (!username || !password) {
    res
      .status(500)
      .render("auth/register", {
        errorMessage: errMsg[0] 
      })
  }

  const requirements = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  if (!requirements.test(password)) {
    res
      .status(500)
      .render("auth/register", {
        errorMessage: errMsg[1]
      })
    return
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPw => {
      return User
        .create({ username, password: hashedPw })
        .then((data) => {
            console.log(data)
            res.render("index")
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
})

router.get("/auth/login", (req, res) => {
  res.render("auth/login")
})

router.post("/auth/login", (req, res, next) => {
  const { username, password } = req.body
 
  if (username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, username and password to login.'
    })
    return
  }
 
  User
    .findOne({ username })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'User is not registered. Try with other username.' })
        return
      } else if (bcryptjs.compareSync(password, user.password)) {
        req.session.currentUser = user
        res.render('index', { userInSession: user })
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' })
      }
    })
    .catch(error => next(error))
})

router.post("/auth/logout", (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err)
    res.redirect("/")
  })
})

module.exports = router
