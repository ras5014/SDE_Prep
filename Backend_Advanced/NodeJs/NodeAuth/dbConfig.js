const pg = require("knex")({
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
  },
});

// Make users table
const createUserTable = async () => {
  const checkTbaleExistsQuery = `SELECT EXISTS (
    SELECT FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename = 'users')`;

  const createTableQuery = `CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`;

  try {
    const res = await pg.raw(checkTbaleExistsQuery);
    if (!res.rows[0].exists) {
      await pg.raw(createTableQuery);
    } else {
      console.log("Table already exists");
    }
  } catch (error) {
    console.error("Error creating table: ", error);
  }
};

module.exports = { pg, createUserTable };
