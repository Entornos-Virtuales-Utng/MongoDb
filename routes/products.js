var express = require("express");
var router = express.Router();
let productModel = require('../models/Producto');

router.get("/", function (req, res, next) {
  res.json("Lista todos los productos");
});

router.get("/:id", function (req, res, next) {
  res.json("Encontrando producto");
});

router.post("/", function (req, res, next) {
    const product = new productModel({
        id: req.body.id,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price,
        images: req.body.images
      });
    
      product.save((err, product) => {
        if (err) {
          res.send(err);
        }
        res.json(product);
      });
});

router.put("/:id", function (req, res, next) {
  res.json("Modificando producto");
});

router.delete("/:id", function (req, res, next) {
  res.json("Eliminando producto");
});

module.exports = router;
