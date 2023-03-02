const express = require("express")
const path = require("path")
const cors = require("cors")

const PORT = process.env.REACT_APP_PORT || 80

const app = express()
app.use(cors())
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen( PORT, () => {
    console.log(`Server listens PORT: ${PORT}`)
    console.log(`REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`)
})