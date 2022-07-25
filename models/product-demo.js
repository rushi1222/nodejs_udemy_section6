const products = [];

module.exports = class Product {
    construtor(t){
        this.title = t;
    }
    save() {
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}