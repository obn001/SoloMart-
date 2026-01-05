const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { business_id, name, description, price, stock_quantity } = req.body;

  const product = await Product.create({
    business_id,
    name,
    description,
    price,
    stock_quantity,
  });

  res.status(201).json(product);
};

exports.getBusinessProducts = async (req, res) => {
  const { businessId } = req.params;

  const products = await Product.findAll({
    where: { business_id: businessId, is_available: true },
  });

  res.json(products);
};
