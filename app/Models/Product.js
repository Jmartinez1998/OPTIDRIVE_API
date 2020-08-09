'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static get Product() {
        return ['name', 'brand','model', 'description', 'price', 'discount', 'optic_id']
    }
    optic() {
        return this.belongsTo('App/Models/Optic', 'optic_id', 'id')
    }
}

module.exports = Product
