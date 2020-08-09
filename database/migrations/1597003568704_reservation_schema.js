'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationSchema extends Schema {
  up () {
    this.create('reservations', (table) => {
      table.increments()
      // Fk_optic
      table.integer('optic_id',).unsigned().references('id').inTable('optics')
      // reservation
      table.string('affair', 80).notNullable()
      // Date reserv
      table.date('date_reserved')
      // Hra
      table.time('hr')
      // Message
      table.string('Message', 300).notNullable()
      // Direction
      table.string('direction', 200).notNullable()
      // City
      table.string('city', 60).notNullable()
      // Fk_cliente
      table.integer('client_id',).unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('reservations')
  }
}

module.exports = ReservationSchema
