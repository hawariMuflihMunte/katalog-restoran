import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'

/**
 * @param buttonContainer is used for place HTMLElement
 * @param restaurant is the data passed from API
 */

const FavoriteButtonInitiator = {
  async init ({
    buttonContainer,
    restaurant
  }) {
    this._buttonContainer = buttonContainer
    this._restaurant = restaurant

    await this._render()
  },

  async _render () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderUnfavorite(id)
    } else {
      this._renderFavorite(this._restaurant)
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite (restaurant) {
    this._buttonContainer.textContent = '🧡'
    this._buttonContainer.title = 'Add to favorite list 🧡'
    this._buttonContainer.setAttribute('aria-label', 'Like this restaurant and add to favorite list')

    this._buttonContainer.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(restaurant)
      this._render()
    })
  },

  _renderUnfavorite (id) {
    this._buttonContainer.textContent = '💔'
    this._buttonContainer.title = 'Remove from favorite list 💔'
    this._buttonContainer.setAttribute('aria-label', 'Unlike this restaurant and remove from favorite list')

    this._buttonContainer.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(id)
      this._render()
    })
  }
}

export default FavoriteButtonInitiator
