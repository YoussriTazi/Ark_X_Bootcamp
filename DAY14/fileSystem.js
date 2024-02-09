const fs = require('fs');

// Read the contents of the text file
fs.readFile('city.txt', 'utf8', async (err, data) => {
if (err) {
console.error('Error reading file:', err);
return;
}

try {
// Parse the JSON data from the text file
const jsonData = JSON.parse(data);

// Select a random city from the parsed JSON data
const randomIndex = Math.floor(Math.random() * jsonData.length);
const randomCity = jsonData[randomIndex];

// Retrieve weather data for the chosen city
const weatherData = await getWeather(randomCity.lat, randomCity.lng);

// Generate the filename for the chosen city
const cityName = randomCity.name.split(' ').join('');
const filename = `${cityName}.txt`;

// Delete the existing file for the chosen city, if it exists
fs.unlink(filename, (err) => {
if (err && err.code !== 'ENOENT') {
console.error('Error deleting existing file:', err);
} else {
console.log(`Existing file for ${randomCity.name} deleted (if it existed)`);
}
});

// Write the temperature result into a new file named "cityname.txt"
const temperature = weatherData.current_weather.temperature;
fs.writeFile(filename, `Temperature in ${randomCity.name}: ${temperature}°C`, (err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log(`Temperature data for ${randomCity.name} written to ${filename}`);
}
});
} catch (parseError) {
console.error('Error parsing JSON data:', parseError);
}
});

// Define the function to retrieve weather data for a given latitude and longitude
const getWeather = async (latitude, longitude) => {
try {
const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
const data = await response.json();
return data;
} catch (error) {
console.error("Error fetching data:", error);
return null;
}
};