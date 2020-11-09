exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.string('project_name', 128).notNullable();
    tbl.string('description', 128);
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
