const router = require("express").Router();
const product = require("../controllers/product.controller");

router.post("/", product.createProduct);
router.get("/business/:businessId", product.getBusinessProducts);

module.exports = router;
