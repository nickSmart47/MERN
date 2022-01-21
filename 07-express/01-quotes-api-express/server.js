const express = require('express'); // require is way of importing something in a  js file
const app = express(); // create variable called app ----> this variable is an instance of express
const port = 8000;


// need these two lines to be able to read and extract information received from post requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))



let quotes = [
    {content: "Music is the one incorporeal entrance into the higher world of knowledge which comprehends mankind but which mankind cannot comprehend.", author: "Ludwig van Beethoven"},
    {content: "Life is a lot like jazz…it's best when you improvise", author: "George Gershwin"},
    {content: "It's easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself.", author: "J.S. Bach"},
    {content: "To achieve great things, two things are needed; a plan, and not quite enough time", author: "Leonard Bernstein"},
    {content: "Music begins where the possibilities of language end", author: "Jean Sibelius"},
    {content: "Nothing primes inspiration more than necessity", author: "Giacchino Rossini"},
    {content: "I frequently hear music in the heart of noise", author: "George Gershwin"},
]



app.get('/api/hello', (req, res) => {
    res.json({ msg: 'hello express!!!' })
})

app.get('/api/quotes', (req, res)=>{
    res.json({count: quotes.length, results: quotes})
})

app.get('/api/quotes/:idx', (req, res) =>{
    res.json({results: quotes[req.params.idx]})
})

app.post('/api/quotes', (req, res)=>{
    res.json({count: quotes.length, results: quotes})
})

// this line is usually at the bottom
app.listen(port, () => console.log(`Listening on port ${port}`));