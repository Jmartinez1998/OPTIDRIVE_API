'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
//users
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const enctyptedAdminPsw = await Hash.make('Admin123456')
    const encryptedPassword = await Hash.make('12345678')

    await Database.table('users').insert([
      {
        // Customer - client
        id: 1,
        username: 'Issac Manuel',
        email: 'Issac@gmail.com',
        password: encryptedPassword,
        status:true,
        last_name:'Gomez Lopez',
        direction:'Av.Ampliacion los Angeles nte Num.149A',
        tel:'7-32-62-80',
        role_id:1,
      },
      {
        // SuperAdmin - client
        id: 2,
        username: 'Jose Luis',
        email: 'admin@admin.com',
        password: enctyptedAdminPsw,
        status: true,
        last_name: 'Martinez Rios',
        direction: 'Col. Rincon de la Merced N.1392',
        tel: '87-15-14-22-22',
        role_id: 3
      },
      {
        // Admin -Customer subscribed with his optics
        id: 3,
        username: 'Karla',
        email: 'Karla@gmail.com',
        password: encryptedPassword,
        status: true,
        last_name: 'Burciaga',
        direction: 'Torreon Jardin N.1233',
        tel: '87-11-01-55-99',
        role_id: 2
      },
      {
        // Driver
        id: 4,
        username: 'Jose',
        email: 'montes@gmail.com',
        password: encryptedPassword,
        status: true,
        last_name: 'Montes',
        direction: 'Torreon Jardin N.1233',
        tel: '87-11-01-55-99',
        role_id: 4
      }
    ])
  }
}

module.exports = UserSeeder
