const express = require('express')
const bodyParser = require('body-parser')
const {
  getAllChampions,
  getChampionsByIdWithRegionAndRoles,
  postChampion,
  deleteChampion
} = require('./controllers/champions')
const { getAllRegions, getRegionByIdWithChampionsAndRoles } = require('./controllers/regions')
const { getAllRoles, getRoleByIdWithChampionsAndRegions } = require('./controllers/roles')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/lol', (request, response) => {
  return response.render('index')
})

app.get('/lol/champions', getAllChampions)

app.get('/lol/champions/:id', getChampionsByIdWithRegionAndRoles)

app.get('/lol/regions', getAllRegions)

app.get('/lol/regions/:id', getRegionByIdWithChampionsAndRoles)

app.get('/lol/roles', getAllRoles)

app.get('/lol/roles/:id', getRoleByIdWithChampionsAndRegions)

app.post('/lol/champions', bodyParser.json(), postChampion)

app.delete('/lol/champions/:name', bodyParser.json(), deleteChampion)

app.all('*', (request, response) => {
  return response.status(404).send('Nothing Legendary or League-like here.')
})

app.listen(6969, () => {
  console.log('Welcoming Legends on 6969....')// eslint-disable-line no-console
})
