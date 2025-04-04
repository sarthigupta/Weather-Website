function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'eee58d6bd68428f97f1d4ea81b19c129'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather').innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                document.getElementById('weather').innerHTML = `<p style="color: red;">City not found!</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p style="color: red;">Error fetching data.</p>`;
        });
}