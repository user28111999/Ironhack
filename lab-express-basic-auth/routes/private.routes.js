const router = require("express").Router()

router.get("/private", (req, res) => {
  res.render("private", { userInSession: req.session.currentUser })
})

module.exports = router
