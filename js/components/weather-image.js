const createWeatherImage = (value) => {

  return `
    <div class="column is-3">
      <img id="weatherCodeToday" class="m-5 p-5" src="${value}"/>
    </div>`
}