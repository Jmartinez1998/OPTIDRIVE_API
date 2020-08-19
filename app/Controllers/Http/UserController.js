'use strict'
const User = use('App/Models/User')
const Encryption = use('Encryption')

class UserController {

    async login({ request, auth, response }) {
        const data = request.only(User.Datapassw)
        const token = await auth.withRefreshToken().attempt(data.email, data.password, true)
        const user = await User.query().where('email', data.email).fetch()
        try {
            return response.ok({ 
                token,
                user
            })
        }
        catch(err) {
            console.error(err)
        }
    }

    async logout({request, auth, response}) {
        const refreshtkn = request.input('refresh_token')
        const decrypt = Encryption.decrypt(refreshtkn)
        try{
            const user = await auth.getUser()
            await user.tokens().where('token', decrypt).delete()
        }
        catch (error) {}
        return response.ok({
            success: true,
            Message: 'Loggout success!',
            data:{}
        })
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
