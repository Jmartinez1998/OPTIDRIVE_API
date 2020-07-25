'use strict'
const User = use('App/Models/User')

class UserController {

    async login({ request, auth, response }) {
        const data = request.only(User.Datapassw)
        const token = await auth.withRefreshToken().attempt(data.email, data.password, true)
        try {
            return response.ok({
                status:200,
                data:{ data,token },
            })
        }
        catch(err) {
            console.error(err)
        }
    }

    async show ({ response }) {
        const users = await User.all()
        try {
            response.send({
                status:200,
                Message: 'succesfully',
                data:{ users }
            })
        }
        catch(error) {
            console.error(error)
        }
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

    async destroy({ request, response, auth }) {
        const us = await auth.getUser()
        if(us.id) {
            await us.delete()
            return response.json({
                status:200,
                Message: 'User succesfully delete'
            })
        }
        else {
            return response.json({
                status:400,
                Message: 'Error user no found'
            })
        }
    }

}

module.exports = UserController
