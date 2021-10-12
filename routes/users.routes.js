const express = require('express');
const router = express.Router();
//Parametros query
router.get('/', (req, res) => {
	const { limit, offset } = req.query;
	limit && offset
		? res.json({ limit, offset })
		: res.send('No hay parametros correctos');
});

module.exports = router;
