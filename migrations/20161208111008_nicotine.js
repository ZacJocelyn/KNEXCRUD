
exports.up = function(knex, Promise) {
  return knex.schema.createTable('nicotine', (table) =>{
    table.increments();
    table.string('type');
    table.integer('mg');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('nicotine');
};
