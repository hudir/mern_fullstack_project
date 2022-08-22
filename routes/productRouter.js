const express = require('express') 
    , productRouter = express.Router()
    , addProduct = require('../controllers/addProduct')
    , allUserProduct = require('../controllers/allUserProduct')

    
    productRouter.get('/add', addProduct)
    productRouter.get('/allByUser/:userId', allUserProduct) 

module.exports = productRouter