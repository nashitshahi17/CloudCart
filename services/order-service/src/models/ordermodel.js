const mongoose = require('mongoose');
const ORDER_STATUS = require('../constants/orderStatus')

const orderSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },

    items:[
        {

            productId:{
                type:mongoose.Schema.Types.ObjectId,
                required:true
            },

            name:{
                type:String,
                required:true
            },

            price:{
                type:Number,
                required:true,
                min:0
            },

            quantity:{
                type:Number,
                required:true,
                min:1
            },

            subtotal:{
                type:Number,
                required:true,
                min:0
            }

        }
    ],

    totalAmount:{
        type:Number,
        required:true,
        min:0
    },

    shippingAddress:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum: Object.values(ORDER_STATUS),
        default:"PENDING"
    }

},{
    timestamps:true
});

orderSchema.index({ userId: 1 });
orderSchema.index({ status: 1 });

const Order = mongoose.model("Order",orderSchema);
module.exports = Order
