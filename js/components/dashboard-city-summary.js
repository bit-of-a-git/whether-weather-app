const createDashboardCitySummary = (title, city, weatherImage, value1, value2) => {
  
  return `
  <div class="column is-3 m-3 p-1 has-background-dark">
    <p class="is-size-4 has-text-centered">${title}</p>
    <a href="/cityfocus/?city=${city}&day=0"><img class="px-5" src="${weatherImage}"/></a>
    <div class="columns is-vcentered">
      <div class="column is-half">
        <p class="is-size-4 has-text-left">${value1}</p>
      </div>
      <div class="column is-half">
        <p class="is-size-4 has-text-right">${value2}</p>
      </div>
    </div>
  </div>`
}