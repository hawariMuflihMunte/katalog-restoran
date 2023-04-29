import CONFIG from '../global/config'

CONFIG.BASE_API_IMAGE_URL = 'https://restaurant-api.dicoding.dev/images/large/'

const DetailsTemplate = {
  init (data) {
    const {
      name,
      description,
      city,
      address,
      pictureId,
      categories,
      menus,
      rating,
      customerReviews
    } = data

    this._name = name
    this._description = description
    this._city = city
    this._address = address
    this._pictureId = pictureId
    this._BASE_API_IMAGE_URL = CONFIG.BASE_API_IMAGE_URL // For image link concatenation
    this._categories = categories
    this._menus = menus
    this._rating = rating
    this._customerReviews = customerReviews

    return this
  },

  _title (text) {
    const title = document.createElement('h1')
    title.textContent = text

    return title
  },

  _image ({
    BASE_API_IMAGE_URL,
    pictureId,
    name
  }) {
    const image = document.createElement('img')
    image.classList.add('details-image')
    image.loading = 'lazy'
    image.src = `${BASE_API_IMAGE_URL}${pictureId}`
    image.alt = `Picture of ${name}`

    return image
  },

  _information ({
    address,
    city,
    categories = []
  }) {
    const informationContainer = document.createElement('div')

    const informationCaption = document.createElement('h3')
    informationCaption.classList.add('details-information-caption')
    informationCaption.textContent = 'Information'
    informationContainer.appendChild(informationCaption)

    const informationAddress = document.createElement('p')
    informationAddress.classList.add('details-information-address')
    informationAddress.textContent = `${address}, ${city}`
    informationContainer.appendChild(informationAddress)

    const informationCategories = document.createElement('ul')
    informationCategories.classList.add('details-information-categories')

    categories.forEach(category => {
      const list = document.createElement('li')
      list.textContent = category.name

      informationCategories.appendChild(list)
    })

    informationContainer.appendChild(informationCategories)

    return informationContainer
  },

  _menuList ({
    menus
  }) {
    const menuDetails = document.createElement('details')
    menuDetails.classList.add('details-menu')
    const menuDetailsSummary = document.createElement('summary')
    menuDetailsSummary.textContent = 'Menu'
    menuDetails.appendChild(menuDetailsSummary)

    const menuDetailsFoodTitle = document.createElement('h4')
    menuDetailsFoodTitle.textContent = 'Foods'
    menuDetails.appendChild(menuDetailsFoodTitle)

    const menuDetailsFoodLists = document.createElement('ol')

    menus.foods.forEach(food => {
      const list = document.createElement('li')
      list.textContent = food.name

      menuDetailsFoodLists.appendChild(list)
    })

    menuDetails.appendChild(menuDetailsFoodLists)

    const menuDetailsDrinkTitle = menuDetailsFoodTitle.cloneNode(true)
    menuDetailsDrinkTitle.innerHTML = ''
    menuDetailsDrinkTitle.textContent = 'Drinks'
    menuDetails.appendChild(menuDetailsDrinkTitle)

    const menuDetailsDrinkLists = menuDetailsFoodLists.cloneNode(true)
    menuDetailsDrinkLists.innerHTML = ''

    menus.drinks.forEach(drink => {
      const list = document.createElement('li')
      list.textContent = drink.name

      menuDetailsDrinkLists.appendChild(list)
    })

    menuDetails.appendChild(menuDetailsDrinkLists)

    return menuDetails
  },

  render () {
    const container = document.createElement('article')
    container.classList.add('details')

    const title = this._title(this._name)
    container.appendChild(title)

    const image = this._image({
      BASE_API_IMAGE_URL: this._BASE_API_IMAGE_URL,
      pictureId: this._pictureId,
      name: this._name
    })
    container.appendChild(image)

    const information = this._information({
      address: this._address,
      city: this._city,
      categories: this._categories
    })
    container.appendChild(information)

    const menus = this._menuList({ menus: this._menus })
    container.appendChild(menus)

    return container
  }
}

export default DetailsTemplate
