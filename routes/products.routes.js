const express = require('express');
const router = express.Router();

const ProductsService = require('../services/products.service');
const service = new ProductsService();
service.generate();

router.get('/', (req, res) => {
	const products = service.find();
	res.status(200).json(products);
});

router.get('/filter', (req, res) => {
	res.send(
		'los endpoints especificos deben de ir antes de los variables filter => :id'
	);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = service.findOne(id);
	res.json(product);
});

router.post('/', (req, res) => {
	const body = req.body;
	res.status(201).json({
		message: 'Created element',
		data: body,
	});
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({
		message: 'Updated an element',
		id: id,
		data: body,
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		message: 'Deleted this element',
		id: id,
	});
});

module.exports = router;
