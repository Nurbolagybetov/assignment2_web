function initMap(lat = 37.7749, lng = -122.4194) {
    const map = L.map('map').setView([lat, lng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lng]).addTo(map)
        .bindPopup('Hello! This is your location.')
        .openPopup();
}

async function fetchWeatherData(city) {
    const apiKey = "143ede01137babaaae732ac2e84eed13";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

async function fetchUnsplashImage(weatherDescription) {
    const unsplashKey = "Hk_qfl8OfcTQD7fcm4cyo_VyyHjbSoc2m3WBUO7swN4";
    const unsplashUrl = `https://api.unsplash.com/photos/random?query=${weatherDescription}&client_id=${unsplashKey}`;

    try {
        const response = await fetch(unsplashUrl);
        const data = await response.json();

        const imageUrl = data.urls.full;
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = "cover";
    } catch (error) {
        console.error("Error fetching Unsplash image:", error);
    }
}

async function fetchTimeZoneData(lat, lng) {
    const apiKey = "VTV6D5ANR6QP"; 
    const timeZoneUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;

    try {
        const response = await fetch(timeZoneUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching timezone data:", error);
    }
}

async function main(city) {
    const weatherData = await fetchWeatherData(city);

    if (weatherData) {
        const { weather, name, coord } = weatherData;
        const weatherDescription = weather[0].description;

        document.getElementById("weather-data").innerHTML = `
            <h3>Weather in ${name}</h3>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Description: ${weatherDescription}</p>
            <p>Feels Like: ${weatherData.main.feels_like}°C</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;

        fetchUnsplashImage(weatherDescription);
        initMap(coord.lat, coord.lon);

        const timeZoneData = await fetchTimeZoneData(coord.lat, coord.lon);
        if (timeZoneData) {
            const localTime = new Date(timeZoneData.timestamp * 1000).toLocaleString();
            document.getElementById("weather-data").innerHTML += `
                <h4>Time Zone Information</h4>
                <p>Time Zone: ${timeZoneData.zoneName}</p>
                <p>Current Time: ${localTime}</p>
            `;
        }
    } else {
        document.getElementById("weather-data").innerHTML = `<p>City not found. Please try again.</p>`;
    }
}

document.getElementById("city-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("city-input").value;
    main(city);
});
