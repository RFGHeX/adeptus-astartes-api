/* eslint-disable max-len */
const championRoles = (connection, sequelize, roles, champions) => {
  return connection.define('championRoles', {
    roleId: { type: sequelize.INTEGER, primaryKey: true, allowNull: false, references: { model: roles, key: 'id' } },
    championId: { type: sequelize.INTEGER, primaryKey: true, allowNull: false, references: { model: champions, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = championRoles
