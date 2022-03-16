const mongoose = require("mongoose")

const Drone = mongoose.model("Drone", {
    name: {
        type: String,
        required: true
    },
    propellers: {
        type: Number,
        required: true
    },
    maxSpeed: {
        type: Number,
        required: true
    }
})

module.exports = Drone