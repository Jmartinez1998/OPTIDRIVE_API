'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRolesSchema extends Schema {
  up () {
    this.create('user_roles', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_roles')
  }
}

module.exports = UserRolesSchema
