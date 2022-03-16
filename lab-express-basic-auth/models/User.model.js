const mongoose = require("mongoose")

const User = mongoose.model("User", {
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
})

module.exports = User