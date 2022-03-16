const express = require("express")
const app = express()

const port = 1337

app.use(express.static("public"))

const routes = [
    {
        url: "/",
        file: "views/home.html"
    },
    {
        url: "/about",
        file: "views/about.html"
    },
    {
        url: "/works",
        file: "views/works.html"
    }    
]

routes.forEach((route) => {
    app.get(route.url, (req, res) => {
        res.sendFile(`${__dirname}/${route.file}`)
    })
})

app.listen(port, () => {
    console.log(`Express app is listening to port ${port}`)
})