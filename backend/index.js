const express = require('express')
//comment
const app = express()

app.use(express.json())

let notes = [
  {
    'id': 1,
    'content': 'Me tengo que suscribir a @midudev',
    'date': '2022-01-10',
    'important': true
  },
  {
    'id': 2,
    'content': 'Tengo que estudiar las clases de FullStack Bootcamp',
    'date': '2022-01-08',
    'important': false
  },
  {
    'id': 3,
    'content': 'Repasar los retos de JS de midudev',
    'date': '2022-01-09',
    'important': false
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World from Root</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
  
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body
  console.log(note)

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    'id': maxId + 1,
    'content': note.content,
    'date': new Date().toISOString(),
    'important': typeof note.important !== 'undefined' ? note.important : false
  }

  notes = [ ...notes, newNote ]

  response.status(201).json(newNote)
})


app.use(() => console.log('HE ENTRADO AQUI'))

const PORT = 5005
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`)
})