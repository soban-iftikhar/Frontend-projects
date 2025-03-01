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
                document.getElementById("weather-container").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
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
