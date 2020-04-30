const express = require('express')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(6969, () => {
  console.log('listening on port 6969....')// eslint-disable-line no-console
})
