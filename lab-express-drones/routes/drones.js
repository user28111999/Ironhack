const express = require('express');
const router = express.Router();

const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  Drone
    .find()
    .then((drones) => {
        res.locals.drones = drones
        res.render("drones/list")
    })
    .catch(err => next(err))
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body

  Drone
    .create({ name, propellers, maxSpeed })
    .then(() => res.redirect('drones'))
    .catch(err => next(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone
    .findById(req.params.id)
    .then(drone => res.render('drones/update-form', drone))
    .catch(err => next(err))
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id  
  const { name, propellers, maxSpeed } = req.body

  Drone
    .findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(err => res.redirect(`/${id}/edit`))
});


router.post('/drones/:id/delete', (req, res, next) => {
  Drone
    findByIdAndDelete(req.params._id)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
});

module.exports = router;
