/* eslint-disable no-undef */

import FavoriteRestaurantIdb from '../src/data/favorite-restaurant-idb'
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'

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

  // Dummy
  const restaurantData = () => {
    return {
      id: 'fnfn8mytkpmkfw1e867',
      name: 'Makan mudah',
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
      city: 'Medan',
      address: 'Jln. Pandeglang no 19',
      pictureId: '22',
      categories: [
        {
          name: 'Jawa'
        }
      ],
      menus: {
        foods: [
          {
            name: 'Kari kacang dan telur'
          }
        ],
        drinks: [
          {
            name: 'Minuman soda'
          }
        ]
      },
      rating: 3.7,
      customerReviews: [
        {
          name: 'Gilang',
          review: 'Harganya murah sekali!',
          date: '14 Agustus 2018'
        }
      ]
    }
  }

  const initLikeButton = () => {
    FavoriteButtonInitiator.init({
      buttonContainer: document.querySelector('.add-to-favorite'),
      restaurant: restaurantData()
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
      await FavoriteRestaurantIdb.putRestaurant(restaurantData()) // Add the restaurant to the database

      restaurant = await FavoriteRestaurantIdb.getRestaurant(restaurantData().id)
      // console.log('Restaurant added to database:', restaurant)

      setTimeout(() => {
        expect(restaurant)
          .toEqual(restaurantData())
      }, 500)
    })

    addToFavoriteElement.dispatchEvent(new Event('click'))
  })

  it('should not add a restaurant again when its already liked', async () => {
    await FavoriteRestaurantIdb.putRestaurant(restaurantData())

    document.querySelector('.add-to-favorite').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([
        restaurantData()
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
