/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.createTable('weather_data', table => {
    table.increments('id');
    table.integer('sunrise');
    table.integer('sunset');
    table.decimal('temp',6,2);
    table.decimal('feels_like',6,2);
    table.integer('pressure');
    table.integer('humidity');
    table.decimal('uvi',5,2);
    table.decimal('wind_speed',5,2);
    table.decimal('lat',7,4);
    table.decimal('lon',7,4);
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  return knex.schema.dropTable('weather_data')
}
