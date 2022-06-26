const ProductServices = require("./productServices");


class CategorieServices {

    constructor() {
        this.products = new ProductServices();
    }

    getCategorieProductId(id) {
        return this.products.find(id);
    }
}



module.exports = CategorieServices;