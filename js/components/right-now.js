const rightNow = (currentTemp, currentWind) => {

  return `
  <div class="is-4 mt-6 p-0 has-text-centered has-background-black has-text-white has-text-weight-bold">
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