const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  // ORDER INFORMATION
  order_id: {
    type: Number,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },

  // BASKET INFORMATION
  product_id: {
    type: Number,
    required: true,
    unique: true
  },
  productName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  

  // CUSTOMER
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  postCode: {
    type: Number,
    required: true
  },
  postalDistrict: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  // ORDER FORMAT
  orderType: {
    type: String,
    required: true
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('order', orderSchema)