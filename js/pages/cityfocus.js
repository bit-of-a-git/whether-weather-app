document.addEventListener("DOMContentLoaded", () => {
    // Title and subtitle
    const urlParams = new URLSearchParams(window.location.search);
    const currentCity = urlParams.get('city');
       
    const title = document.getElementById('title');
    title.innerHTML = capitaliseCityName(currentCity);
    const subtitle = document.getElementById('subtitle');
    subtitle.innerHTML = "Today";

    const now = dayjs(); // create a new date object that represents this time

    const currentHour = now.format("HH"); // 0 - 23 as a number
     
    const hourlyData = weatherData[currentCity + "_hourly"].hourly;
    const hourlyUnits = weatherData[currentCity + "_hourly"].hourly_units;
    // we need the index of the current hour in the time array
    // we then use that index to query the termperature_2m data
    const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
     
    const currentTemp = hourlyData.temperature_2m[indexOfCurrentHour] + hourlyUnits.temperature_2m;
       
    const currentWind = hourlyData.wind_speed_10m[indexOfCurrentHour] + hourlyUnits.wind_speed_10m;

    const header = document.getElementById('rightSide');
    header.innerHTML += rightNow(currentTemp, currentWind);

    // Middle section
  
    const dailyData = weatherData[currentCity + "_daily"].daily;
    const dailyUnits = weatherData[currentCity + "_daily"].daily_units;

    const weatherImage = getImageSource(dailyData.weather_code[0]);
    const chanceOfRain = dailyData.precipitation_probability_max[0] + "%"
    const maxTemp = dailyData.temperature_2m_max[0] + dailyUnits.temperature_2m_max;
    const maxWind = dailyData.wind_speed_10m_max[0] + dailyUnits.wind_speed_10m_max;

    const cityFocusMiddle = document.getElementById('cityFocusMiddle');
    cityFocusMiddle.innerHTML += createWeatherImage(weatherImage);
    cityFocusMiddle.innerHTML += createMaxValueCard("Chance of Rain", chanceOfRain);
    cityFocusMiddle.innerHTML += createMaxValueCard("Max Temp", maxTemp);
    cityFocusMiddle.innerHTML += createMaxValueCard("Max Wind", maxWind);

    const main = document.getElementById('dailySummary');
    // Loop for week summary
    for (let i = 0; i < 7; i++) {
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : now.add(i, 'day').format("dddd");
      main.innerHTML += daySummary(i, weatherData[currentCity + "_daily"], dayName);
    }
});