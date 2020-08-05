'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpticsSchema extends Schema {
  up () {
    this.create('optics', (table) => {
      table.increments()
      table.integer('manager_id',).unsigned().references('id').inTable('users')
      table.string('opti_name', 80).notNullable()
      table.string('direction', 300).notNullable()
      table.string('city', 120).notNullable()
      table.string('RFC', 14).notNullable()
      table.string('description', 300).notNullable()
      table.string('tel', 17)
      table.string('logo_img')
      table.timestamps()
    })
  }

  down () {
    this.drop('optics')
  }
}

module.exports = OpticsSchema
