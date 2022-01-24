/*
terminal commands for starting new fullstack app!
npm init -y
npm install mongoose express
touch server.js
*/

const express = require('express'); // import express



const app = express(); // initialize express
const port = 8000; // specify port in variable


// connecting to our mongodb databse using mongoose
require("./server/config/config")


// hello world route to make sure everything is connected!

// old way
// app.get("/api/hello", (req,res)=>{
//     res.json({msg: "Hello mongoose!"})
// })

//new modularized way!
require("./server/routes/ninja.routes")(app)



app.listen( port, () => console.log(`Listening on port: ${port}`))