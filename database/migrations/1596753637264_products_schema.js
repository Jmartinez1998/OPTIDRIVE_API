'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('brand', 30)
      table.string('model', 30)
      table.string('description', 300).notNullable()
      table.decimal('price').notNullable()
      table.decimal('discount').notNullable()
      table.integer('optic_id',).unsigned().references('id').inTable('optics')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
