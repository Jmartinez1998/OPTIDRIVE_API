'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Optic extends Model {
    static get data_optic () {
        return ['manager_id', 'opti_name','direction', 'city', 'RFC', 'description', 'tel']
        }

    user() {
        return this.belongsTo('App/Models/User', 'manager_id', 'id')
    }
}

module.exports = Optic
