'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */

  static get hidden () {
     return ['password']
  }

  static get store () {
    return ['username','last_name', 'direction', 'tel', 'email', 'password']
  }

  static get Datapassw() {
    return ['email', 'password','role_id']
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  role() {
    return this.belongsTo('App/Models/UserRole', 'role_id')
  }

  Optic () {
    return this.hasMany('App/Models/Optic')
  }

}

module.exports = User
