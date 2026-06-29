const express = require("express");
const router = express.Router();
const {handleGetProductInternal,handleValidateProducts} = require("../controllers/internalProductController");

router.get("/:id", handleGetProductInternal);
router.post("/validate",handleValidateProducts);

module.exports = router;