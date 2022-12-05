const Pool = require('pg').Pool;
require("dotenv").config();

const devConfig = {
    connectionString:
        "postgres://pernsearch_user:MxdhhcSK3ERtKPiQKU351mCI9ILN6dHJ@dpg-ce6hdk2rrk071o5pv730-a.oregon-postgres.render.com/pernsearch?ssl=true",
    // user: process.env.PG_USER,
    // password: process.env.PG_PASSWORD,
    // host: process.env.PG_HOST,
    // port: process.env.PG_PORT,
    // database: process.env.PG_DATABASE,
};

const pool = new Pool(devConfig);

module.exports = pool;