var config = {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  sql_user: process.env.SQL_USER,
  sql_password: process.env.SQL_PASSWORD,
  sql_database: process.env.SQL_DATABASE,
};

module.exports = config;
