const express = require("express");
const controller = require('../controllers/internalController')
const router = express.Router();
router.get("/:userId",controller.handleGetCart);
router.delete("/:userId",controller.handleClearCart);

module.exports = router;