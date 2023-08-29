const express = require('express')
const fs = require('fs')
const { promisify } = require('util')

const app = express()

app.get('/', async (req, res) => {
  try {
    const data = await fs.readFileSync('./db.json', {
      encoding: 'utf-8'
    })

    const parse = JSON.parse(data)
    res.send(parse.user)
  } catch (e) {
    res.status(500).json({ err: e })
  }
})

app.post('/', (req, res) => {
  res.status(500).json({ err: 'throw error' })
})

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})