'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserRole extends Model {
    static get DataRole() {
        return ['name', 'description']
    }
}

module.exports = UserRole
