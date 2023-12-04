const Sequelize = require('sequelize');
const Testdb = require('./testdb');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Testdb = Testdb;
Testdb.initiate(sequelize);
Testdb.associate(db);

module.exports = db;
