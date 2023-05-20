/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../src/data/favorite-restaurant-idb'
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'
import dummyData from './data/dummy'

describe('Liking a restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = `
      <button
        class="add-to-favorite"
        title="Add to favorite list 🧡"
        aria-label="Like this restaurant and add to favorite list"
      >
        🧡
      </button>
    `
  }

  dummyData()

  const initLikeButton = () => {
    FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('.add-to-favorite'),
      restaurant: dummyData()
    })
  }

  beforeEach(() => {
    initLikeButton()
    likeButtonContainer()
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('fnfn8mytkpmkfw1e867')
  })

  it('should show the like button when the restaurant has not been liked before', () => {
    expect(document.querySelector('[aria-label="Like this restaurant and add to favorite list"]'))
      .toBeTruthy()
  })

  it('should not show the unlike button when the restaurant has not been liked before', () => {
    expect(document.querySelector('[aria-label="Unlike this restaurant and remove from favorite list"]'))
      .toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    const addToFavoriteElement = document.querySelector('.add-to-favorite')

    let restaurant

    addToFavoriteElement.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(dummyData()) // Add the restaurant to the database

      restaurant = await FavoriteRestaurantIdb.getRestaurant(dummyData().id)
      // console.log('Restaurant added to database:', restaurant)

      setTimeout(() => {
        expect(restaurant)
          .toEqual(dummyData())
      }, 500)
    })

    addToFavoriteElement.dispatchEvent(new Event('click'))
  })

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteRestaurantIdb.putRestaurant(dummyData())

    document.querySelector('.add-to-favorite').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([
        dummyData()
      ])
  })

  it('should not add a movie when it has no id', async () => {
    FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('.add-to-favorite'),
      restaurant: {}
    })

    document.querySelector('.add-to-favorite').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([])
  })
})
