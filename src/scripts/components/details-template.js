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
    city
  }) {
    const tabularContainer = document.createElement('table')
    const tabularHeader = document.createElement('thead')
    const tabularBody = document.createElement('tbody')

    const headerRow = document.createElement('tr')
    const header = document.createElement('th')
    header.textContent = 'Information'
    headerRow.appendChild(header)

    tabularHeader.appendChild(headerRow)
    tabularContainer.appendChild(tabularHeader)

    const bodyRow1 = document.createElement('tr')
    const data1 = document.createElement('td')
    data1.textContent = 'Address'
    bodyRow1.appendChild(data1)

    const data2 = document.createElement('td')
    data2.textContent = address
    bodyRow1.appendChild(data2)
    tabularBody.appendChild(bodyRow1)

    const bodyRow2 = document.createElement('tr')
    const data3 = document.createElement('td')
    data3.textContent = 'City'
    bodyRow2.appendChild(data3)

    const data4 = document.createElement('td')
    data4.textContent = city
    bodyRow2.appendChild(data4)
    tabularBody.appendChild(bodyRow2)

    tabularContainer.appendChild(tabularBody)

    return tabularContainer
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
