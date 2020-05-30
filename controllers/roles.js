const models = require('../models')

const getAllRoles = async (request, response) => {
  try {
    const allRoles = await models.roles.findAll()

    return response.send(allRoles)
  } catch (error) {
    return response.status(500).send('Could not retrieve the roles, please try again.')
  }
}

const getRoleByIdWithChampionsAndRegions = async (request, response) => {
  try {
    const { id } = request.params
    const matchingRole = await models.roles.findOne({
      include: [{
        include: [{
          model: models.regions
        }],
        model: models.champions,
      }],
      where: {
        [models.Op.or]: [
          { id },
          { role: { [models.Op.like]: `%${id.toLowerCase()}%` } }
        ]
      },
    })

    return matchingRole
      ? response.send(matchingRole)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Could not retrieve the role, please try again')
  }
}

module.exports = { getAllRoles, getRoleByIdWithChampionsAndRegions }
