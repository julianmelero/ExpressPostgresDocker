const express = require("express");
const productRouter = require("./productRouter");
const categoriesRouter = require("./categorieRouter");
const userRouter = require("./userRouter");

function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/products", productRouter);
    router.use("/categories", categoriesRouter);
    router.use("/users", userRouter);
}

module.exports = routerApi;