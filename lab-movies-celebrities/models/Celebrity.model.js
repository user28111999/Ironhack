const mongoose = require("mongoose")

const Celebrity = mongoose.model("Celebrity", {
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        default: "Unknown",
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    }
})

module.exports = Celebrity