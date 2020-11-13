exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username", 32).notNullable();
    table.string("password", 32).notNullable();
    table.string("nickname", 32);
    table.string("email", 64);
    table.integer("access_level").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
