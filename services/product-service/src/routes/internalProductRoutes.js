const express = require("express");
const router = express.Router();
const {handleGetProductInternal, handleBulkProductsInternal, handleValidateProducts} = require("../controllers/internalProductController");

router.get("/:id", handleGetProductInternal);
router.get('/bulk',handleBulkProductsInternal)
router.post("/validate",handleValidateProducts);

module.exports = router;