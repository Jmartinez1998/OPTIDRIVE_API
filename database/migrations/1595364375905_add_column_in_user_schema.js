'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnInUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      //table.integer('rol_id').defaultTo(1).unsigned().notNullable().references('id').inTable('user_roles');
      table.integer('status').defaultTo(1);
    })
  }

  down () {
    this.alter('users', (table) => {
      // reverse alternations
      //table.dropColumn('rol_id')
      table.dropColumn('status')
    })
  }
}

module.exports = AddColumnInUserSchema
