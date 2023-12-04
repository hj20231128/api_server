const Sequelize = require('sequelize');

class Testdb extends Sequelize.Model {
  static initiate(sequelize) {
    Testdb.init({
      col1: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      col2: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },

    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Testdb',
      tableName: 'testdbs',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });

  }
  static associate(db) {
    // db.Testdb.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
  }
};

module.exports = Testdb;
