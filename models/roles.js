const roles = (connection, sequelize) => {
  return connection.define('roles', {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    role: { type: sequelize.STRING, allowNull: false }
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, {
    paranoid: true,
  })
}

module.exports = roles
