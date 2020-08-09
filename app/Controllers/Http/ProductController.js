'use strict'
const product = use('App/Models/Product')

class ProductController {
    async New({ request, response }) {
        const data = request.only(product.Product)
        const nw_product = await product.create(data);
        return response.ok({
            status:200,
            message: 'Poduct created succes!',
            data:nw_product
        })
    }
    async show({ params, response }) {
        const Prod = await product.query().where('id', params.id).fetch()
        return response.ok(Prod)
    }

    async showall({ response }) {
        const data = await product.all()
        try {
            response.send({
                status:200,
                Message: 'succesfully',
                data:{ data }
            })
        }
        catch(error) {
            console.error(error)
        }
    }
}

module.exports = ProductController
