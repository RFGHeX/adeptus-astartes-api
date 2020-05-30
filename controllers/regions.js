const models = require('../models')

const getAllRegions = async (request, response) => {
  try {
    const allRegions = await models.regions.findAll()

    return response.send(allRegions)
  } catch (error) {
    return response.status(500).send('Could not retrieve regions, please try again.')
  }
}

const getRegionByIdWithChampionsAndRoles = async (request, response) => {
  try {
    const { id } = request.params
    const matchingRegion = await models.regions.findOne({
      include: [{
        include: [{ model: models.roles }],
        model: models.champions
      }],
      where: {
        [models.Op.or]: [
          { id },
          { name: { [models.Op.like]: `%${id.toLowerCase()}%` } }
        ]
      }

    })

    return matchingRegion
      ? response.send(matchingRegion)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not retrieve the region, please try again.')
  }
}

module.exports = { getAllRegions, getRegionByIdWithChampionsAndRoles }
