const createDaySummary = (i, colour, dayName, weatherImage, city, value1, value2) => {

    return `
    <div class="column mx-2 p-1 has-background-${colour}">
    <p class="is-size-4 has-text-centered">${dayName}</p>
    <a href="/cityfocus/?city=${city}&day=${i}"><img class="px-5" src="${weatherImage}"/></a>
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