const express = require("express")
const path = require("path")

const PORT = process.env.REACT_APP_PORT || 80

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "allFLowers.html"))
})

app.listen(PORT)