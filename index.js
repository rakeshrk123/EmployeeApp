//Importing express library to create server
const express = require("express") 
// Routing[Logic => Controller => CRUD], 
// Listening() => Creating Server, 
// Middlewares 

const mongoose = require("mongoose")
// Connect to Database

const router = require("./routes/emproutes")

const app = express()

app.use('/emp',router)

app.get("/user", (req, res) =>{
    res.send("Fetch API Call")
})
const port = 5000

app.listen(port,(req,res) =>{
    console.log(`Starting application on port : http://localhost: ${port}`)
})

const mongodburl = "mongodb+srv://madhaoweb:Maddy123@cluster0.gllq4.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodburl)
.then(()=>{
    console.log("DB Connected!!")
})
.catch((err)=>{
    console.log(err)
})

