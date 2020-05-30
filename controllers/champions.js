const models = require('../models')

const getAllChampions = async (request, response) => {
  try {
    const allChampions = await models.champions.findAll({
      include: [{
        model: models.regions,
      },
      {
        model: models.roles,
      }],
    })

    return response.send(allChampions)
  } catch (error) {
    return response.status(500).send('Could not find champions, please try again.')
  }
}
const getChampionsByIdWithRegionAndRoles = async (request, response) => {
  try {
    const { id } = request.params

    const matchingChampions = await models.champions.findOne({
      include: [{
        model: models.regions,
      },
      {
        model: models.roles,
      }],
      where: {
        [models.Op.or]: [
          { id },
          { name: { [models.Op.like]: `%${id.toLowerCase()}%` } }
        ]
      }
    })

    return matchingChampions
      ? response.send(matchingChampions)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not retrieve the champion, please try again.')
  }
}

const postChampion = async (request, response) => {
  try {
    const { name, region, role } = request.body

    if (!name || !region || !role) {
      return response.status(400).send('Please fill out all required fields')
    }

    const foundRegion = await models.regions.findOne({ where: { name: region } })

    const foundRole = await models.roles.findOne({ where: { role } })
    const newChampion = await models.champions.findOrCreate({
      where: { name },
      defaults: { regionId: foundRegion.id }
    })

    await models.championRoles.findOrCreate({
      where: {
        championId: newChampion.id,
        roleId: foundRole.id
      }
    })


    return response.status(201).send(newChampion)
  }
  catch (error) {
    return response.status(500).send('Could not save new champion, please try again.')
  }
}

const deleteChampion = async (request, response) => {
  try {
    const { name } = request.params
    const matchingChampions = await models.champions.findOne({ where: { name } })

    if (!matchingChampions) {
      return response.status(404)
    }

    await models.championRoles.destroy({ where: { championId: matchingChampions.id } })
    await models.champions.destroy({ where: { name: matchingChampions.name } })

    return response.send('Successfully deleted the champion')
  }
  catch (error) {
    return response.status(500).send('Unknown error while deleting champion, please try again.')
  }
}


module.exports = { getAllChampions, getChampionsByIdWithRegionAndRoles, postChampion, deleteChampion }
