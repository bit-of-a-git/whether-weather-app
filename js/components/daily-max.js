const createDailyMax = (title, value) => {

    return `
    <div class="column is-3 ml-6 mr-3 p-0 has-background-black">
      <p class="is-size-5 has-text-centered mb-6">${title}</p>
      <p class="is-size-5 has-text-centered mb-6">${value}</p>
    </div>`
}