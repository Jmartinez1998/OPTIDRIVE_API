'use strict'
const User = use('App/Models/User')

class UserController {
    async store({ request, response }) {
        //const { username, email, password } = request.all();
        const Data_us = request.only(['username', 'email', 'password'])
        const user = await User.create(Data_us);
        return response.created({
            status:200,
            data:user
        });
    }
}

module.exports = UserController
