'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpticsSchema extends Schema {
  up () {
    this.create('optics', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('optics')
  }
}

module.exports = OpticsSchema
