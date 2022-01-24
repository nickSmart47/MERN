/*
commands for starting new fullstack app!
npm init -y
npm install mongoose express
touch server.js
*/

const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose

const app = express(); // initialize express
const port = 8000; // specify port in variable


app.get("/api/hello", (req,res)=>{
    res.json({msg: "Hello mongoose!"})
})






app.listen( port, () => console.log(`Listening on port: ${port}`))