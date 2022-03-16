const mongoose = require("mongoose")

const Movie = mongoose.model("Movie", {
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    cast: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

module.exports = Movie
