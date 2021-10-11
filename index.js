const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
	res.json({ message: 'hola desde nueva ruta' });
});

app.get('/products', (req, res) => {
	const products = [];
	const { size } = req.query;
	const limit = size || 10;
	for (let i = 0; i < size; i++) {
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price(), 10),
			image: faker.image.imageUrl(),
		});
	}
	res.json(products);
});

app.get('/products/filter', (req, res) => {
	res.send(
		'los endpoints especificos deben de ir antes de los variables filter => :id'
	);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		id,
		name: 'product 2',
		price: 200,
	});
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
	const { categoryId, productId } = req.params;
	res.json({
		categoryId,
		productId,
	});
});

//Parametros query
app.get('/users', (req, res) => {
	const { limit, offset } = req.query;
	limit && offset
		? res.json({ limit, offset })
		: res.send('No hay parametros correctos');
});

app.listen(port, () => {
	console.log('The server is running on the port' + port);
});
