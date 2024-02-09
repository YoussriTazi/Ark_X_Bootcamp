const cities = [
    {id:1, name: 'New York', lat: 40.7128, lng: -74.0060 },
    {id:2, name: 'London', lat: 51.5074, lng: -0.1278 },
    {id:3, name: 'Paris', lat: 48.8566, lng: 2.3522 },
    {id:4, name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    {id:5, name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    {id:6, name: 'Rome', lat: 41.9028, lng: 12.4964 },
    {id:7, name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    {id:8, name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    {id:9, name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    {id:10, name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

// Fetch weather data
const getWeather = async (latitude, longitude) => {
    try {
        const response = await fetch(https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

// Select a random city from the cities array
const selectRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
};

// Get and log temperature for a random city
const getTemp = async () => {
    const randomCity = selectRandomCity();
    const weatherData = await getWeather(randomCity.lat, randomCity.lng);
    if (weatherData && weatherData.current_weather) {
        const temperature = weatherData.current_weather.temperature;
        return temperature;
    } else {
        console.log('Weather data not available for the selected city.');
        return null;
    }
};

// Get and log ID, name, and temperature for a random city
const getCityInfo = async () => {
    const randomCity = selectRandomCity();
    const temperature = await getTemp();
    if (temperature !== null) {
        console.log(City ID: ${randomCity.id}, Name: ${randomCity.name}, Temperature: ${temperature}°C);
    } else {
        console.log('City information not available.');
    }
};

// Call the function to demonstrate functionality
getCityInfo();