document.addEventListener("DOMContentLoaded", () => {
      
  const title = document.getElementById('title');
  title.innerHTML = 'Dashboard';
  const subtitle = document.getElementById('subtitle');
  subtitle.innerHTML = "Today";

  // Selects the "dashboard" element in the HTML to add sections to
  const dashboard = document.getElementById('dashboard');

  Object.entries(weatherData).forEach(([key, value]) => {
    if (key.endsWith("_daily")) {
      // Process the key-value pair as needed
      dashboard.innerHTML += createDashboardCitySummary(key, value);
    }
  })
})