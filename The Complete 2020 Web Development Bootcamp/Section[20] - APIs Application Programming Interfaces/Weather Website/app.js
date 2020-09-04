const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');

app.listen(3000, console.log('server listend to port 3000'));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Home',
		weather: '',
		description: '',
		img: '',
		cityname: ''
	});
});

app.post('/', (req, res) => {
	const cityName = req.body.city;
	const unit = 'metric';
	const apiKey = '16c22abf3db881128b2c6167ecfb27be';
	const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
	https.get(api, (response) => {
		response.on('data', (data) => {
			const weatherData = JSON.parse(data);
			const temperature = JSON.parse(data).main.temp;
			console.log(cityName);
			const description = JSON.parse(data).weather[0].description;
			const img = JSON.parse(data).weather[0].icon;
			const imgPath = `http://openweathermap.org/img/wn/${img}@2x.png`;
			res.render('index', {
				title: 'Home',
				weather: temperature,
				description: description,
				img: imgPath,
				cityname: cityName
			});
		});
	});
});
