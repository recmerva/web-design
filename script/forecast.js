document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "ed8a951092ca4eac926183701231912";
    const defaultCity = "Belgrade"; // Podrazumevani grad

    function getWeatherData(city) {
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                updateCurrentWeather(data);
                updateHourlyForecast(data.forecast.forecastday[0].hour);
            })
            .catch(error => {
                console.error("Greška prilikom preuzimanja podataka:", error);
                alert("Došlo je do greške pri preuzimanju podataka. Pokušajte ponovo.");
            });
    }

    function updateCurrentWeather(data) {
        document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
        document.getElementById('description').textContent = data.current.condition.text;
        document.getElementById('feelsLike').textContent = `${data.current.feelslike_c}°C`;
        document.getElementById('wind').textContent = `${data.current.wind_kph} km/h ${data.current.wind_dir}`;
        document.getElementById('humidity').textContent = `${data.current.humidity}%`;
        document.getElementById('pressure').textContent = `${data.current.pressure_mb} mbar`;
        document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;
    }

    function updateHourlyForecast(hours) {
        const hourlyForecastContainer = document.getElementById('hourlyForecast');
        hourlyForecastContainer.innerHTML = ''; // Očisti prethodni sadržaj

        hours.forEach(hour => {
            const hourElement = document.createElement('div');
            hourElement.className = 'hourly-item';
            hourElement.innerHTML = `
                <p>${new Date(hour.time).getHours()}h</p>
                <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
                <p>${hour.temp_c}°C</p>
                <p>${hour.condition.text}</p>
            `;
            hourlyForecastContainer.appendChild(hourElement);
        });
    }

    function handleSearch() {
        const cityInput = document.getElementById('cityInput').value.trim();
        if (cityInput) {
            getWeatherData(cityInput);
        } else {
            alert("Molimo unesite naziv grada.");
        }
    }

    document.querySelector('.navbar-search button').addEventListener('click', handleSearch);

    document.getElementById('cityInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Automatski prikaz za podrazumevani grad
    getWeatherData(defaultCity);
});
