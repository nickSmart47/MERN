
const express = require('express'); // import express



const app = express(); // initialize express
const port = 8000; // specify port in variable

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// connecting to our mongodb databse using mongoose
require("./server/config/config")


// hello world route to make sure everything is connected!

// old way
// app.get("/api/hello", (req,res)=>{
//     res.json({msg: "Hello mongoose!"})
// })

//new modularized way!
require("./server/routes/joke.routes")(app)



app.listen( port, () => console.log(`Listening on port: ${port}`))