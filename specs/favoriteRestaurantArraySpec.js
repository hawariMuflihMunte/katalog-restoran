/* eslint-disable no-undef */
import itActsAsFavoriteRestaurant from './contract/favoriteRestaurantContract'

let favoriteRestaurant = []

const FavoriteRestaurantArray = {
  getRestaurant (id) {
    if (!id) {
      return false
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurants () {
    return favoriteRestaurant
  },

  putRestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return false
    }

    if (this.getRestaurant(restaurant.id)) {
      return false
    }

    favoriteRestaurant.push(restaurant)
  },

  deleteRestaurant (id) {
    favoriteRestaurant = favoriteRestaurant.filter((movie) => movie.id !== id)
  }
}

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteRestaurant = [])

  itActsAsFavoriteRestaurant(FavoriteRestaurantArray)
})
