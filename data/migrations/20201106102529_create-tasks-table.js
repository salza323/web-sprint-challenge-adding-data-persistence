exports.up = function (knex) {
  return knex.schema.createTable('tasks', (tbl) => {
    tbl.increments();
    tbl.string('description', 128).notNullable();
    tbl.string('notes', 128);
    tbl.boolean('completed').defaultTo(0);
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks');
};
