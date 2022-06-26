require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3000,
    dbUser: process.env.DBUSER,
    dbPASS: process.env.DBPASS,
    dbHost: process.env.DBHOST,
    dbNAME: process.env.DBNAME,
    dbPORT: process.env.DBPORT,
}

module.exports = config;