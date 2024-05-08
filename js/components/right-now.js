const createRightNowElement = (currentTemp, currentWind) => {

  return `
  <div class="column is-11 mt-4 mr-3 has-text-centered has-background-success has-text-white has-text-weight-bold">
    <p class="is-size-4 mb-6">Right Now</p>
    <div class="columns is-vcentered">
      <div class="column is-half">
        <p class="is-size-4">${currentTemp}</p>
      </div>
      <div class="column is-half">
        <p class="is-size-4">${currentWind}</p>
      </div>
    </div>
  </div>`
}