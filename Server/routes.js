const express = require('express');
const app = express();

const problem = {};

app.get('/',(req, res) => {
    res.send('Hello World');
})

app.post('/signup',(req,res) => {
    res.json(req.body)
})

app.post('/login',(req,res) => {
    res.json(req.body)
})

app.get('/problem',() => {
    res.json(problem)
})

app.post('/submission',() => {
    res.json(req.body)
})

const PORT = 3000
app.listen(PORT,() => console.log(`Server is listening on port number ${PORT}...`))