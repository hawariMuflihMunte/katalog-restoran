const Favorite = {
  async render () {
    return `
      <h1>DishPlate</h1>
      <br>
      <h2>Favorit</h2>
      <hr>
      <div id="list" role="list"></div>
    `
  },
  async afterRender () {
    // Logic upcoming
  }
}

export default Favorite
