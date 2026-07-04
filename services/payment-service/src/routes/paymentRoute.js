const express = require("express");

const paymentController = require("../controllers/paymentController");

const validate = require("../middlewares/validate");

const { createPaymentSchema } = require("../validators/paymentValidator");

const {authenticateUser} = require("../middlewares/auth");

const router = express.Router();

router.post(
    "/",
    authenticateUser,
    validate(createPaymentSchema),
    paymentController.handleCreatePayment
);

router.get(
    "/:id",
    authenticateUser,
    paymentController.handleGetPayment
);

router.get(
    "/order/:orderId",
    authenticateUser,
    paymentController.handleGetPaymentByOrder
);

module.exports = router;