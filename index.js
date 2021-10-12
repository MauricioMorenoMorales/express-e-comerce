const express = require('express');
const app = express();
const port = 3000;

const router = require('./routes/index.js');

app.use(express.json());

app.get('/api', (req, res) => {
	res.send('Hola mi server en Express');
});

router(app);

app.listen(port, () => {
	console.log('The server is running on the port' + port);
});
