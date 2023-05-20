/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../src/data/favorite-restaurant-idb'
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'
import dummyData from './data/dummy'

describe('Unliking a restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = `
      <button
        class="add-to-favorite"
        title="Remove from favorite list 💔"
        aria-label="Unlike this restaurant and remove from favorite list"
      >
        💔
      </button>
    `
  }

  const initLikeButton = () => {
    FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('.add-to-favorite'),
      restaurant: dummyData()
    })
  }

  beforeEach(async () => {
    initLikeButton()
    likeButtonContainer()

    await FavoriteRestaurantIdb.putRestaurant(dummyData())
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(dummyData().id)
  })

  it('should display unlike button when the restaurant has been liked', (done) => {
    expect(document.querySelector('[aria-label="Unlike this restaurant and remove from favorite list"]'))
      .toBeTruthy()

    done()
  })

  it('should not display like button when the restaurant has been liked', (done) => {
    expect(document.querySelector('[aria-label="Like this restaurant and add to favorite list"]'))
      .toBeFalsy()

    done()
  })

  it('should be able to remove liked restaurant from the list', () => {
    document.querySelector('[aria-label="Unlike this restaurant and remove from favorite list"]')
      .dispatchEvent(new Event('click'))

    setTimeout(async () => {
      expect(await FavoriteRestaurantIdb.getAllRestaurants())
        .toEqual([])
    }, 400)
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(dummyData().id)

    document.querySelector('[aria-label="Unlike this restaurant and remove from favorite list"]')
      .dispatchEvent(new Event('click'))

    setTimeout(async () => {
      expect(await FavoriteRestaurantIdb.getAllRestaurants())
        .toEqual([])
    }, 400)
  })
})
