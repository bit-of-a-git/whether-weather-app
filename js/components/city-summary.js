const createCitySummary = (city, value) => {
  
  return `
  <div class="column is-3 m-3 p-1 has-background-black">
    <p class="is-size-4 has-text-centered">${capitaliseCityName(city)}</p>
    <a href="/cityfocus/?city=${city.replace("_daily", "")}"><img class="px-5" src="${getImageSource(value.daily.weather_code[0])}"/></a>
    <div class="columns is-vcentered">
      <div class="column is-half">
        <p class="is-size-4 has-text-left">${Math.round(value.daily.temperature_2m_min[0]) + value.daily_units.temperature_2m_min}</p>
      </div>
      <div class="column is-half">
        <p class="is-size-4 has-text-right">${Math.round(value.daily.temperature_2m_max[0]) + value.daily_units.temperature_2m_max}</p>
      </div>
    </div>
  </div>`
}