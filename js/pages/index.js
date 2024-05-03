document.addEventListener("DOMContentLoaded", () => {
      
  const title = document.getElementById('title');
  title.innerHTML = 'Dashboard';
  const subtitle = document.getElementById('subtitle');
  subtitle.innerHTML = "Today";

  // Selects the "main" in the HTML to add sections to
  const main = document.querySelector('main');

  Object.entries(weatherData).forEach(([key, value]) => {
    if (key.endsWith("_daily")) {
      // Process the key-value pair as needed
      main.innerHTML += createCitySummary(key, value);
    }
  })
})