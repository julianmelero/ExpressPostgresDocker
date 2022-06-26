const { Pool } = require("pg");

const config = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPASS);

const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPORT}/${config.dbNAME}`;

const pool = new Pool({
        connectionString: URI
    });
    


module.exports = pool;