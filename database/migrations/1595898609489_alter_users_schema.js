'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUsersSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.string('last_name',80)
      table.string('direction',350),
      table.string('tel', 17),
      table.integer('role_id',).unsigned().references('id').inTable('user_roles').defaultTo(1)
    })
  }

  down () {
    this.alter('users', (table) => {
      // reverse alternations
      table.dropColumn('last_name'),
      table.dropColumn('direction'),
      table.dropColumn('tel'),
      table.dropColumn('role_id')
    })
  }
}

module.exports = AlterUsersSchema
