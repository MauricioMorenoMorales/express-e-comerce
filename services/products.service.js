const faker = require('faker');

class ProductsService {
	constructor() {
		this.products = [];
	}
	create() {}
	generate() {
		for (let i = 0; i < 100; i++) {
			this.products.push({
				id: faker.datatype.uuid(),
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.imageUrl(),
			});
		}
	}
	find() {
		return this.products;
	}
	findOne(id) {
		return this.products.find((item) => item.id === id);
	}
	update() {}
	delete() {}
}

module.exports = ProductsService;
