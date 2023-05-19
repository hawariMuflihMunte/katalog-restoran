import * as idb from 'idb'
import CONFIG from '../scripts/global/config'

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME
} = CONFIG

const dbPromise = idb.openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (db) {
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    })
  }
})

const FavoriteRestaurantIdb = {
  async getRestaurant (id) {
    if (!id) {
      return false
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },

  async getAllRestaurants () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },

  async putRestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return false
    }

    if (this.getRestaurant(restaurant.id)) {
      return false
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },

  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteRestaurantIdb
