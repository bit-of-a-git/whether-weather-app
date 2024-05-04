const createMaxValueCard = (title, value) => {

    return `
    <div class="column is-3 ml-1 mr-1 has-background-black">
      <p class="is-size-5 has-text-centered mb-6">${title}</p>
      <p class="is-size-5 has-text-centered">${value}</p>
    </div>`
}