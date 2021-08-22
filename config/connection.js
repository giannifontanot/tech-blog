const Sequelize = require('sequelize');
const root = require('app-root-path');
const path = require('path');

require('dotenv').config({path:root +path.sep + ".env"});

let connString = "";

if (process.env.JAWSDB_URL) {
    connString = process.env.JAWSDB_URL;
}else{
    connString =
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
    {host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
}

const sequelize = new Sequelize(connString);

module.exports = sequelize;