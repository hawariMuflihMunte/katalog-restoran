import ApiEndpoint from '../../utils/api-endpoint'
import DetailsTemplate from '../../components/details-template'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'

const Detail = {
  async render () {
    return `
      <section id="content" class="container">
        <a href="/#/" class="home-button">⬅ Back</a>
        <br>
        <section id="details-container" role="list">
          <!-- JS async render -->
        </section>
        <button class="add-to-favorite">🧡</button>
      </section>
    `
  },

  async afterRender () {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const getId = url.id

      const data = await ApiEndpoint.getDetail(getId)

      FavoriteButtonInitiator.init({
        buttonContainer: document.querySelector('.add-to-favorite'),
        restaurant: data.restaurant
      })

      const details = DetailsTemplate.init(data.restaurant).render()
      document.getElementById('details-container').appendChild(details)
    } catch (error) {
      console.log(error)
    }
  }
}

export default Detail
