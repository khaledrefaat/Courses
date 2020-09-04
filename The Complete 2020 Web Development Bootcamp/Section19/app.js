const express = require('express');

const app = express();
app.listen(3000, console.log('server listen to port 3000'));

// view engine(ejs)
app.set('view engine', 'ejs');

// bodyParser
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

app.get('/mass', (req, res) => {
	res.render('mass', { title: 'Mass' });
});

app.post('/', (req, res) => {
	let sum = parseInt(req.body.weight) / (parseInt(req.body.height) * parseInt(req.body.height));
	res.send(`YouR Bmi Is ${sum}`);
});
