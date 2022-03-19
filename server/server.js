const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const fs = require("fs") 
const fileName = "server/poems.json"

const rawData = fs.readFileSync(fileName)
const data = JSON.parse(rawData)

app.use(express.json())
app.use(express.static("build"))
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token");
    next();
  });

app.get('/', (request, response) => {
    response.send('<h1>SERVER RUNNING</h1>')
})

app.get('/api/poems', (request, response) => {
    response.json(data.poems)
})

app.get('/api/poems/:id', (request, response) =>{
    const id = Number(request.params.id)
    const poem = data.poems.find(poem => poem.id === id)
    if(poem){
        response.json(poem)
    }
    else{
        response.status(404).end()
    }
})

app.delete('/api/poems/:id', (request, response) => {
    const id = Number(request.params.id)
    const len = data.poems.length

    try{
        data.poems = data.poems.filter(poem => poem.id !== id)
      response.status(204).end()
    }
    catch(err){
      alert("id not found!")
      return response.status(400).json({
        error: 'id not found!'
      })
    }
    if(data.poems.length >= len){
        res.status(404)
    }
})

app.post('/api/poems/:id', (request, response) => {
    const body = request.body
    const id = Number(request.params.id)
    const poem = data.poems.find(poem => poem.id === id)
    if(poem){
        newVote = poem.votes++
        response.json(poem.votes)
    }
    else{
        response.status(401).end()
    }
       
    response.json(poem)
    fs.writeFileSync(fileName, poem)
})

app.post('/api/poems', (request, response) => {
    const maxId = data.poems.length > 0
    ? Math.max(...data.poems.map(p => p.id))
    : 0

    const body = request.body

    const poem = {
        id: maxId + 1,
        title: body.title,
        author: body.author,
        text: body.text,
        votes: body.votes
    }

    data.poems = data.poems.concat(poem)
    response.json(poem)
    fs.writeFileSync(fileName, poem)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`running on ${PORT}`)
})





