exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.string('project_name', 128).notNullable();
    tbl.string('description', 128);
    tbl.boolean('completed').defaultTo(0);
    tbl
      .integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('task_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tasks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
