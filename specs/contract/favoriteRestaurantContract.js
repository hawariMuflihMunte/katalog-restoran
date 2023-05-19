/* eslint-disable no-undef */

const itActsAsFavoriteRestaurant = (favoriteRestaurantFunc) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurantFunc.putRestaurant({ id: 1 })
    favoriteRestaurantFunc.putRestaurant({ id: 2 })

    expect(await favoriteRestaurantFunc.getRestaurant(1))
      .toEqual({ id: 1 })
    expect(await favoriteRestaurantFunc.getRestaurant(2))
      .toEqual({ id: 2 })
    expect(await favoriteRestaurantFunc.getRestaurant(3))
      .toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurantFunc.putRestaurant({ aProp: 'property' })

    expect(await favoriteRestaurantFunc.getAllRestaurants())
      .toEqual([])
  })

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurantFunc.putRestaurant({ id: 1 })
    favoriteRestaurantFunc.putRestaurant({ id: 2 })

    expect(await favoriteRestaurantFunc.getAllRestaurants())
      .expect([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should remove favorite restaurant', async () => {
    favoriteRestaurantFunc.putRestaurant({ id: 1 })
    favoriteRestaurantFunc.putRestaurant({ id: 2 })
    favoriteRestaurantFunc.putRestaurant({ id: 3 })

    await favoriteRestaurantFunc.deleteRestaurant(3)

    expect(await favoriteRestaurantFunc.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurantFunc.putRestaurant({ id: 1 })
    favoriteRestaurantFunc.putRestaurant({ id: 2 })
    favoriteRestaurantFunc.putRestaurant({ id: 3 })

    await favoriteRestaurantFunc.deleteRestaurant(4)

    expect(await favoriteRestaurantFunc.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export default itActsAsFavoriteRestaurant
