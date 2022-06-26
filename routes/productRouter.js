const express = require("express");

const ProdutServices = require("../services/productServices");
const validatorHandler = require("../middlewares/validatorHandler");
const { createProductSchema,getProductSchema,updateProductSchema } = require("../schemas/productSchema");

const router = express.Router();

const services = new ProdutServices();

router.get("/", async (req,res) => {
    const products = await services.find();
    res.json(products);    
});

router.get("/filter", (req,res) => {
    res.send("I'm a product filter");
});


router.get("/:id", validatorHandler(getProductSchema, "params"),
async (req,res,next) => {
    try {
        const {id} = req.params;
        const product = await services.findOne(id);
        res.json(product);    
    } catch (error) {
        next(error);    
    }
    
});



router.post("/", validatorHandler(createProductSchema, "body"),
async (req,res) => {
try {
        const body = req.body;
        const newProduct = await services.create(body);
        res.status(201).json({
            message: "created",
            data: newProduct
        });
        } catch (error) {
        next(error);            
        }
});

router.patch("/:id", validatorHandler(updateProductSchema,"body"),
async (req,res,next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await services.update(id,body);
        res.json({ product })
    } catch (error) {
       next(error);
    }
 
});

router.delete("/:id", async (req,res) => {
    const { id } = req.params;
    const rta = await services.delete(id);
    res.json({ rta })
});

module.exports = router;