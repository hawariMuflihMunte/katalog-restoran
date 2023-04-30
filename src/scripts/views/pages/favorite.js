import FavoriteRestaurantIdb from "../../../data/favorite-restaurant-idb"
import Card from "../../components/card"

const Favorite = {
  async render () {
    return `
      <section id="content" class="container">
        <h1>DishPlate</h1>
        <br>
        <h2>Favorite</h2>
        <hr>
        <div id="list" role="list"></div>
      </section>
    `
  },
  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()

    if (restaurants.length !== 0) {
      restaurants.forEach(data => {
        const card = Card.init(data).render()

        document.getElementById('list').appendChild(card)
      })
    } else {
      document.getElementById('list').textContent = 'There are currently no restaurant(s) in your favorites list.'
    }
  }
}

export default Favorite
