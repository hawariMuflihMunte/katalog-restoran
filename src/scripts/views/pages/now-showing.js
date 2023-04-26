import DATA from '../../../data/DATA.json'
import '../../components/card'

const NowShowing = {
  async render () {
    return `
      <h1>DishPlate</h1>
      <br>
      <h2>Katalog</h2>
      <hr>
      <div id="list" role="list"></div>
    `
  },
  async afterRender () {
    DATA.restaurants.forEach(data => {
      const card = document.createElement('card-component')
      card.data = data

      document.getElementById('list').appendChild(card)
    })
  }
}

export default NowShowing
