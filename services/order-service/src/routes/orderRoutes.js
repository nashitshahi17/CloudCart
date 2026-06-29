const express = require("express");
const router = express.Router();
const {handleCreateOrder,handleGetUserOrders,handleGetOrder,handleUpdateOrderStatus,handleDeleteOrder} = require("../controllers/orderController");
const {authenticateUser,authorizeAdmin} = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const {createOrderSchema,updateOrderStatusSchema} = require("../validators/orderValidator");

router.post("/",authenticateUser,validate(createOrderSchema),handleCreateOrder);
router.get("/",authenticateUser,handleGetUserOrders);
router.get("/:id",authenticateUser,handleGetOrder);
router.patch("/:id/status",authenticateUser,authorizeAdmin,validate(updateOrderStatusSchema),handleUpdateOrderStatus);
router.delete("/:id",authenticateUser,authorizeAdmin,handleDeleteOrder);

module.exports = router;