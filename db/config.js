const config = require("../config/config")


const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPASS);

const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPORT}/${config.dbNAME}`;

module.exports = {
    development: {
        url: URI,
        dialect: "postgres",
    },
    production: {
        url: URI,
        dialect: "postgres"
    }
}
