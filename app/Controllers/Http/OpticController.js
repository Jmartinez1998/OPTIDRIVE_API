'use strict'

const opt = use('App/Models/Optic')

class OpticController {
    async CreateOptic({ request, response }) {
        const data = request.only(opt.data_optic)
        const nw_op = await opt.create(data);
        return response.assertStatus({
            status:200,
            message: 'Optic created succes!',
            data:nw_op
        })
    }
}

module.exports = OpticController
