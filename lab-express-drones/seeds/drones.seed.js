const mongoose = require("mongoose")
const Drone = require("../models/Drone.model")

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones"

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err)
    }
)

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
    { name: "Google Spy Drone", propellers: 8, maxSpeed: 32 },
    { name: "Peeping Tom's Amazon Drone", propellers: 2, maxSpeed: 10 }
]

Drone
    .create(drones)
    .then((x) => console.log(`Sucessfully inserted ${x.length} documents to the database`))
    .catch(err => console.error("Error inserting data: ", err))