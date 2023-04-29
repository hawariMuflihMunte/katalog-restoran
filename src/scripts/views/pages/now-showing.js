import ApiEndpoint from '../../utils/api-endpoint'
import Card from '../../components/card'

const NowShowing = {
  async render () {
    return `
      <section class="hero-banner" role="banner">
        <picture>
          <source srcset="./images/heros/hero.webp" type="image/webp">
          <img src="./images/heros/hero.jpg" alt="Food in a bowl and a bunch of flowers on the side of the bowl">
        </picture>
      </section>
      <section id="content" class="container">
        <h1>DishPlate</h1>
        <br>
        <h2>Katalog</h2>
        <hr>
        <section id="list" role="list">
          <!-- JS async render -->
        </section>
      </section>
    `
  },

  async afterRender () {
    try {
      const data = await ApiEndpoint.getList()

      data.restaurants.forEach(data => {
        const card = Card.init(data).render()

        document.getElementById('list').appendChild(card)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default NowShowing
