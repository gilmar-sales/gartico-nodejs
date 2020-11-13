exports.up = function (knex) {
  return knex.schema.createTable("draws", (table) => {
    table.increments().primary();
    table.string("name", 64).notNullable().unique();
    table.string("subcategory_name");
    table
      .foreign("subcategory_name")
      .references("name")
      .inTable("subcategories");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("draws");
};
