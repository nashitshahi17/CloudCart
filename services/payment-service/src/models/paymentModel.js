const mongoose = require("mongoose");

const PAYMENT_STATUS = require("../constants/paymentStatus");
const PAYMENT_METHOD = require("../constants/paymentMethod");

const paymentSchema = new mongoose.Schema({

    orderId: {

        type: mongoose.Schema.Types.ObjectId,

        required: true,

        index: true

    },

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        required: true,

        index: true

    },

    amount: {

        type: Number,

        required: true,

        min: 0

    },

    method: {

        type: String,

        enum: Object.values(PAYMENT_METHOD),

        required: true

    },

    transactionId: {

        type: String,

        required: true,

        unique: true

    },

    status: {

        type: String,

        enum: Object.values(PAYMENT_STATUS),

        default: PAYMENT_STATUS.PENDING

    }

}, {

    timestamps: true

});

const Payment =  mongoose.model("Payment", paymentSchema);

module.exports = Payment