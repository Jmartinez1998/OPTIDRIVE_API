'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Optic extends Model {
    static get store () {
        return ['username','last_name', 'direction', 'tel', 'email', 'password']
        }    
}

module.exports = Optic
