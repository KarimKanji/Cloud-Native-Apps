const express = require('express')
const router = express.Router()
const Order = require('../models/order')
//const authToken = require('../middleware/authToken')


router.get('/', async (req, res) => {

    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        res.status(500).send({ msg: error.message })

    }
})




module.exports = router