const Sequelize = require('sequelize');
const root = require('app-root-path');
const path = require('path');

require('dotenv').config({path:root +path.sep + ".env"});

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}else{
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
    {host:'localhost',
        dialect:'mysql',
        port:3306,
    });
}

module.exports = sequelize;