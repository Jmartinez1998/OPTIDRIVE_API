'use strict'

const UserRole = require("../../Models/UserRole")

const Role = use('App/Models/UserRole')

class UserRoleController {
    async store({ request, response, auth }){
        const datatk = request.only(UserRole.DataRole)
        const nwrole = await Role.create(datatk);
        return response.ok({
            status:200,
            message: 'Role created succes!',
            data:nwrole
        })
    }
}

module.exports = UserRoleController
