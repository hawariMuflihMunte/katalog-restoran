import ApiEndpoint from '../../utils/api-endpoint'
import Card from '../../components/card'
import UrlParser from '../../routes/url-parser'

const Detail = {
  async render () {
    return `
      <section id="content" class="container">
        <h1>DishPlate</h1>
        <br>
        <h2>Detail</h2>
        <hr>
        <section id="list" role="list">
          <!-- JS async render -->
        </section>
      </section>
    `
  },

  async afterRender () {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const getId = url.id

      const data = await ApiEndpoint.getDetail(getId)
      console.log(data.restaurant)

      const card = Card.init(data.restaurant).render()
      document.getElementById('list').appendChild(card)
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
