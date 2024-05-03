const daySummary = (i, value, dayName) => {

    return `
    <div class="column mx-2 p-1 has-background-black">
    <p class="is-size-4 has-text-centered">${dayName}</p>
    <img class="px-5" src="${getImageSource(value.daily.weather_code[i])}"/>
    <div class="columns is-vcentered">
      <div class="column is-half">
        <p class="is-size-4 has-text-left">${Math.round(value.daily.temperature_2m_min[i]) + value.daily_units.temperature_2m_min}</p>
      </div>
      <div class="column is-half">
        <p class="is-size-4 has-text-right">${Math.round(value.daily.temperature_2m_max[i]) + value.daily_units.temperature_2m_max}</p>
      </div>
    </div>
  </div>`
}