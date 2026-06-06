document.getElementById("weatherForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const city = document.getElementById("city").value.trim();
  const country = document.getElementById("country").value.trim();
  const weatherResult = document.getElementById("weatherResult");

  try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=e3b2613ad5c1b496e1f0c7535e8e0d83`)

    if(!res.ok) {
      weatherResult.innerHTML = `<p>No data available</p>`
      return;
    }

    const data = await res.json();

    weatherResult.innerHTML = `
      <div class="weather-box">
        <h2>Current weather in ${data.name} </h2>
        <p>Coordinate(Longitude): ${data.coord.lon} </p>   
        <p>Coordinate(Latitude): ${data.coord.lat} </p>      
        <p>Temperature: ${data.main.temp} °C </p>
        <p>What The Temperature Feels Like: ${data.main.feels_like} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidiy: ${data.main.humidity}</p>
        <p>Wind Speed: ${data.wind.speed}m/s</p>
        <p>Wind Degree: ${data.wind.deg}°</p>
         <p>Pressure: ${data.main.pressure}</p>
       
      </div>
    `

  } catch (error) {
    weatherResult.innerHTML = `<p>No data available</p>`;
    console.log("Error is:", error);
  }
})