document.addEventListener("DOMContentLoaded", () => {

  const titleElement = document.getElementById('title');
  const subtitleElement = document.getElementById('subtitle');
  const dashboardElement = document.getElementById('dashboard');

  titleElement.innerHTML = 'Dashboard';
  subtitleElement.innerHTML = "Today";

  // https://www.digitalocean.com/community/tutorials/js-object-entries-values
  Object.entries(weatherData).forEach(([key, value]) => {
    if (key.endsWith("_daily")) {

      // Fetches the values needed for each dashboard element.
      const city = key.replace("_daily", "")
      const cityTitle = capitaliseCityName(key);
      const weatherImage = getImageSource(value.daily.weather_code[0]);
      const value1 = Math.round(value.daily.temperature_2m_min[0]) + value.daily_units.temperature_2m_min
      const value2 = Math.round(value.daily.temperature_2m_max[0]) + value.daily_units.temperature_2m_max

      dashboardElement.innerHTML += createDashboardCitySummary(cityTitle, city, weatherImage, value1, value2);
    }
  })
})