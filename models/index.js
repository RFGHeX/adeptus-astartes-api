const sequelize = require('sequelize')
const regionsModels = require('./regions')
const championsModels = require('./campions')
const rolesModels = require('./roles')
const championRolesModels = require('./championRoles')
const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const regions = regionsModels(connection, sequelize)
const champions = championsModels(connection, sequelize, regions)
const roles = rolesModels(connection, sequelize)
const championRoles = championRolesModels(connection, sequelize, roles, champions)

regions.hasMany(champions)
champions.belongsTo(regions)

champions.belongsToMany(roles, { through: championRoles })
roles.belongsToMany(champions, { through: championRoles })

module.exports = {
  regions, champions, roles, championRoles, Op: sequelize.Op
}
