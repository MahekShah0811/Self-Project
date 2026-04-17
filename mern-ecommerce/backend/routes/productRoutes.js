const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// CREATE product(s)
router.post("/", async (req, res) => {
  try {
    // Check if the incoming data is an Array (multiple products)
    if (Array.isArray(req.body)) {
      const savedProducts = await Product.insertMany(req.body);
      return res.json(savedProducts);
    } 
    
    // If it's just one single product object
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;