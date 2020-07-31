'use strict'

/*
|--------------------------------------------------------------------------
| UserRoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UserRoleSeeder {
  async run () {
    await Database.table('user_roles').insert([
      {
        name: 'Client',
        description: 'General customer'
      },
      {
        name: 'Admin',
        description: 'Customer subscribed with his optics'
      },
      {
        name: 'Spr_admin',
        description: 'System administrator'
      },
      {
        name: 'Driver',
        description: 'Package or product delivery'
      }
    ])
  }
}

module.exports = UserRoleSeeder
