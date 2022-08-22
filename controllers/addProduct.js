const Product = require('../models/Product')
   , {faker} = require('@faker-js/faker')

const addProduct = (req, res) =>{
    const newProduct = {
        product_title: faker.commerce.productName(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number(),
        created_at: Date.now(),
        added_by: "63033ed215508d61d6150882"
    }

    new Product(newProduct).save((err,data)=>{
        res.json('1 product has been added')
    })

}

module.exports = addProduct