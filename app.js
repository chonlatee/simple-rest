import express from 'express'

const app = express()

const randomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min)
}

const resPonse = (req, res) => {
  const rNumber = randomNumber(1000, 3000)
  const json = {
    number: rNumber
  }
  setTimeout(() => res.json(json), rNumber)
}

app.get('/r', resPonse)
app.post('/r', resPonse)
app.put('/r', resPonse)
app.delete('/r', resPonse)

module.exports = app
