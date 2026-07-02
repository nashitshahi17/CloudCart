const express = require("express");
const cartController = require("../controllers/cartController");
const validate = require('../middleware/validate');

const {
    addToCartValidator,
    updateCartValidator,
} = require("../validators/cartValidator");

const {
    authenticateUser
} = require("../middleware/auth");

const router = express.Router();

// correct middleware name
router.use(authenticateUser);

router.post(
    "/",
    validate(addToCartValidator),
    cartController.addToCart
);

router.get("/", cartController.getCart);

router.patch(
    "/:productId",
    validate(updateCartValidator),
    cartController.updateCartItem
);

router.delete("/:productId", cartController.removeCartItem);

router.delete("/", cartController.clearCart);

module.exports = router;