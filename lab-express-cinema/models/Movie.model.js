const mongoose = require("mongoose")

const Movie = mongoose.model("Movie", {
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: [String]
    }
})

module.exports = Movie