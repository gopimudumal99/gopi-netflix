const express = require("express")
const path = require('path')
const port = process.env.PORT || 3000

let initial_path = path.join(__dirname, "public")

let app = express();
app.use(express.static(initial_path)) //express.static() method to make public folder as a static path

app.get("/", (req, res) => { 
    res.sendFile(path.join(initial_path, "Public/js/index.html"));
})

app.get("/:id", (req, res) => { 
    res.sendFile(path.join(initial_path,"about.html"))
})

app.use((req, res) => { 
    res.json("404")
})

app.listen(port, (req,res) => { 
    console.log(`Listening on port ...${port}`)
})