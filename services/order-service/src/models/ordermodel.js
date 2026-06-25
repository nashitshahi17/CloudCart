const mongoose = require('mongoose');

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
                required:true
            },

            quantity:{
                type:Number,
                required:true
            },

            subtotal:{
                type:Number,
                required:true
            }

        }
    ],

    totalAmount:{
        type:Number,
        required:true
    },

    shippingAddress:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:[
            "PENDING",
            "CONFIRMED",
            "SHIPPED",
            "DELIVERED",
            "CANCELLED"
        ],
        default:"PENDING"
    }

},{
    timestamps:true
});

const Order = mongoose.model("Order",orderSchema);
module.exports = Order
