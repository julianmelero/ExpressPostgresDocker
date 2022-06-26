const express = require("express");

const router = express.Router();

const CategoriServices = require("../services/categoriesServices");

const services = new CategoriServices();


router.get("/:categoryId/products/:productsId", (req,res) => {

    const {categoryId, productsId} = req.params;
    const product =  services.getCategorieProductId(productsId);
    res.json({
      categoryId,
      product
    })
});

module.exports = router;