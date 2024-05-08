document.addEventListener("DOMContentLoaded", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const currentCity = urlParams.get('city');
  // currentDay is fetched as a string. The Number function is used here to cast it to an int for comparison
  const currentDay = Number(urlParams.get('day'));

  const now = dayjs(); // create a new date object that represents this time

  const titleElement = document.getElementById('title');
  const subtitleElement = document.getElementById('subtitle');
  // Replaces the title with the current city, formatted using the capitaliseCityName function
  titleElement.innerHTML = capitaliseCityName(currentCity);
  // Replaces the subtitle with Today, Tomorrow, or the day
  const dayName = currentDay === 0 ? "Today": currentDay === 1 ? "Tomorrow" : now.add(currentDay, 'day').format("dddd");
  subtitleElement.innerHTML = dayName;

  // Adds a "Right Now" header section if the day is 'today'
  if (currentDay === 0) {
    const currentHour = now.format("HH"); // 0 - 23 as a number

    const hourlyData = weatherData[currentCity + "_hourly"].hourly;
    const hourlyUnits = weatherData[currentCity + "_hourly"].hourly_units;
    // we need the index of the current hour in the time array
    // we then use that index to query the termperature_2m data
    const indexOfCurrentHour = hourlyData.time.indexOf(`TodayT${currentHour}:00`);
     
    const currentTemp = hourlyData.temperature_2m[indexOfCurrentHour] + hourlyUnits.temperature_2m;
       
    const currentWind = hourlyData.wind_speed_10m[indexOfCurrentHour] + hourlyUnits.wind_speed_10m;

    const headerElement = document.getElementById('rightSide');
    headerElement.innerHTML += createRightNowElement(currentTemp, currentWind);
    }

    // Fetches the data and units for the current city
    const dailyData = weatherData[currentCity + "_daily"].daily;
    const dailyUnits = weatherData[currentCity + "_daily"].daily_units;

    const weatherImage = getImageSource(dailyData.weather_code[currentDay]);
    const chanceOfRain = dailyData.precipitation_probability_max[currentDay] + "%";
    const maxTemp = dailyData.temperature_2m_max[currentDay] + dailyUnits.temperature_2m_max;
    const maxWind = dailyData.wind_speed_10m_max[currentDay] + dailyUnits.wind_speed_10m_max;

    // Creates middle section using the above values
    const cityFocusMiddleElement = document.getElementById('cityFocusMiddle');
    cityFocusMiddleElement.innerHTML += createWeatherImage(weatherImage);
    cityFocusMiddleElement.innerHTML += createMaxValueCard("Chance of Rain", chanceOfRain);
    cityFocusMiddleElement.innerHTML += createMaxValueCard("Max Temp", maxTemp);
    cityFocusMiddleElement.innerHTML += createMaxValueCard("Max Wind", maxWind);

    const dailySummaryElement = document.getElementById('dailySummary');
    // Loop for week summary
    for (let i = 0; i < 7; i++) {
      
      // Colours the active day red, dark grey otherwise
      const colour = i === currentDay ? "danger" : "dark"

      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : now.add(i, 'day').format("dddd");
      const weatherImage = getImageSource(dailyData.weather_code[i])
      const minTemp = Math.round(dailyData.temperature_2m_min[i]) + dailyUnits.temperature_2m_min;
      const maxTemp = Math.round(dailyData.temperature_2m_max[i]) + dailyUnits.temperature_2m_max;

      dailySummaryElement.innerHTML += createDaySummary(i, colour, dayName, weatherImage, currentCity, minTemp, maxTemp);
    }
});