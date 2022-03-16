const router = require("express").Router()

router.get("/main", (req, res) => {
  res.render("main", { userInSession: req.session.currentUser })
})

module.exports = router
