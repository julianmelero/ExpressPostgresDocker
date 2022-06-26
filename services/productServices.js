const faker = require("faker");
const boom = require("@hapi/boom");


const pool = require("../libs/postgresPool");
const sequelize = require("../libs/squelize");

class ProductServices {

    constructor(){
        this.products = [];
        this.generate();
        this.pool = pool;
        this.pool.on("error", (error) => console.log(error));
    }

    async generate() {
        const limit =  10;
        for(let index =0; index < limit; index++){
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl(),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(name,price,image){
        const newProduct = {
            id: faker.datatype.uuid(),
            price: price,
            name : name,
            image : image
        };
        this.products.push({
                newProduct
            });
        return newProduct;
    }

    async find() {
       const query = "SELECT * FROM tasks";
       const [data,metadata] = await sequelize.query(query);
       return data;
        
    }

    async findOne(id) {        
        const product =  this.products.find(item => item.id === id);
        if (!product){
            throw boom.notFound("Product not found");
        }
        if(product.isBlock) {
            throw boom.conflict("Product is Block");
        }
        return product;

    }

    async update(id,changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound("Product not found");
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes

        }
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound("Product not found");
        }
        this.products.splice(index,1);
        return {
            id
        };
    }

}


module.exports = ProductServices;