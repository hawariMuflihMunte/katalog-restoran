const Favorite = {
  async render () {
    return `
      <section id="content" class="container">
        <h1>DishPlate</h1>
        <br>
        <h2>Favorit</h2>
        <hr>
        <div id="list" role="list"></div>
      </section>
    `
  },
  async afterRender () {
    // Logic upcoming
  }
}

export default Favorite
