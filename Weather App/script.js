document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    const apiKey = "b13e59a546d2193139387bde289fb132";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        document.getElementById("weather-container").innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                
                const weatherEmojis = {
                    Clear: "☀️",       // Sunny
                    Clouds: "☁️",      // Cloudy
                    Rain: "🌧️",       // Rainy
                    Thunderstorm: "⛈️", // Storm
                    Snow: "❄️",       // Snowy
                    Mist: "🌫️",       // Mist/Fog
                    Drizzle: "🌦️",    // Light Rain
                    Haze: "🌁",       // Hazy
                };
            
              
                const weatherCondition = data.weather[0].main; 
                const weatherEmoji = weatherEmojis[weatherCondition] || "🌍"; 
            
                document.getElementById("weather-container").innerHTML = `
                    <div class="weather-card">
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <h1>${weatherEmoji} ${data.main.temp}°C</h1>
                        <p class="weather-desc">${data.weather[0].description}</p>
                        <div class="weather-details">
                            <p>💧 Humidity: ${data.main.humidity}%</p>
                            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
                        </div>
                    </div>
                `;

            } else {
                document.getElementById("weather-container").innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch((error) => {
            console.error("Fetch error:", error);
            document.getElementById("weather-container").innerHTML = `<p>Error fetching data. Check your connection.</p>`;
        });
});
