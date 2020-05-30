const champions = (connection, sequelize, regions) => {
  return connection.define('champions', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize.STRING, allowNull: false },
    regionId: { type: sequelize.INTEGER, references: { model: regions, key: 'id' } }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true
  })
}

module.exports = champions
