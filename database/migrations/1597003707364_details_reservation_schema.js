'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetailsReservationSchema extends Schema {
  up () {
    this.create('details_reservations', (table) => {
      table.increments()
      // Id Cita o reservacion
      table.integer('reservation_id',).unsigned().references('id').inTable('reservations')
      table.integer('product_id',).unsigned().references('id').inTable('products')
      table.integer('service_id',).unsigned().references('id').inTable('services')
      table.decimal('subtotal').notNullable()
      table.decimal('total').notNullable()
      //status
      table.timestamps()
    })
  }

  down () {
    this.drop('details_reservations')
  }
}

module.exports = DetailsReservationSchema
