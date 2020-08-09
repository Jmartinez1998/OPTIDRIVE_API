'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.integer('optic_id',).unsigned().references('id').inTable('optics')
      table.string('name', 80).notNullable()
      table.string('description', 300).notNullable()
      table.decimal('price').notNullable()
      table.string('img')
      table.boolean('discount').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServicesSchema
