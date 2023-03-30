/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('characters', (table) => {
        table.increments().primary();
        table.string('japanese').notNullable();
        table.string('romaji').notNullable();
        table.string('type').notNullable();
        table.string('consonant').notNullable();
        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('characters');
};
