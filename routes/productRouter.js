const express = require('express') 
    , productRouter = express.Router()
    , addProduct = require('../controllers/addProduct')
    , allUserProduct = require('../controllers/allUserProduct')
    , showAllProducts = require('../controllers/showAllProducts')

    
    productRouter.get('/add/:userId', addProduct)
    productRouter.get('/allByUser/:userId', allUserProduct) 
    productRouter.get('/all', showAllProducts)

module.exports = productRouter