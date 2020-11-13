var config = {
  client: "pg",
  connection: process.env.DATABASE_URL || {
    client: "pg",
    user: "postgres",
    password: "123456",
    database: "gartico",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./database/migrations",
  },
};

module.exports = config;
