exports.up = function (knex) {
  return knex.schema.createTable("categories", (table) => {
    table.string("name", 64).primary();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("categories");
};
