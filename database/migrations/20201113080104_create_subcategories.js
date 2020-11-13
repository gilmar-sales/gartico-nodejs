exports.up = function (knex) {
  return knex.schema.createTable("subcategories", (table) => {
    table.string("name", 64).primary();
    table.string("category_name").notNullable();
    table.foreign("category_name").references("name").inTable("categories");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("subcategories");
};
