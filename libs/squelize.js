const { Sequelize } = require("sequelize");

const config = require("../config/config");

const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPASS);

const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPORT}/${config.dbNAME}`;

const sequelize = new Sequelize(URI, {
    dialect: "postgres",
    logging: true,
    });

    setupModels(sequelize);

    // Using Migrations
    


    // Create structure from de models
    //sequelize.sync();

    module.exports = sequelize;