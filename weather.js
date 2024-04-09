function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=8da225f4107ffbb8a4c63062b24b7886`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                console.log(response);
                throw new Error(`Error, please try again later`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather data:', data);
            // Updated element IDs to match the original HTML structure
            document.getElementById("temperature").innerText = `Temp: ${data.main.temp}K  | Feels like: ${data.main.feels_like}K  | Wind: ${data.wind.speed} m/s | Humidity: ${data.main.humidity}%`; // Shows detailed temperature info
            document.getElementById("description").innerText = `Weather: ${data.weather[0].main} - ${data.weather[0].description}`; // Shows general weather condition followed by detailed description
        })
        .catch(error => {
            console.log(error);
            console.error('Error fetching weather data:', error);
        });
}

window.onload = () => {
    getWeather();
}
