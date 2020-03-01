import constants from 'expo-constants';
const axios = require('axios');

export const getWeather = async () => {
	const cityName = 'Vancouver';
	const lat: number = 34.7689;
	const lon: number = 137.3917;
	const apiKey: string = constants.manifest.extra.weather.apiKey;
	const res = await axios
		// .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
		.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
		.catch((err) => {
			console.error(err);
			return Promise.reject('BAD REQUEST');
		});
	console.log(res.data);
	return res.data;
};

export function isStarVisible(): boolean {
	// TODO: A better logic to determine if stars are visible
	let isVisible = false;

	const data = getWeather()
		.then((data) => {
			const cloud = data.clouds.all;
			console.log(cloud);
			if (cloud < 10) {
				isVisible = true;
			}
		})
		.catch((err) => {
			console.error(err);
			isVisible = false;
		});

	return isVisible;
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=43f993812ea04be3a67d81716512d4da
