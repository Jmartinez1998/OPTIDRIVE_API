'use strict'
const User = use('App/Models/User')

class UserController {

    async login({ request, auth, response }) {
        const data = request.only(User.Datapassw)
        const token = await auth.withRefreshToken().attempt(data.email, data.password, true);
        return response.ok({
            status:200,
            data:data,
            token:token
        })
    }

    async register ({ request, response, auth }) {
        //const { username, email, password } = request.all();
        const Data_us = request.only(User.store)
        const user = await User.create(Data_us);
        const token = await auth.withRefreshToken().attempt(user.email, Data_us.password)
        return response.created({
            status:200,
            Message: 'User registred succes',
            data:{ user, token }
        })
    }
}

module.exports = UserController
