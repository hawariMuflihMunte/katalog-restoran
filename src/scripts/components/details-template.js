import CONFIG from '../global/config'
import './review-box' // <review-box>

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

  _descriptions ({
    descriptions
  }) {
    const descriptionsContainer = document.createElement('p')
    descriptionsContainer.classList.add('details-descriptions')
    descriptionsContainer.textContent = descriptions

    return descriptionsContainer
  },

  _menuList ({
    menus,
    menusStatus = 'food'
  }) {
    const details = document.createElement('details')
    details.classList.add('details-menu')
    details.id = menusStatus

    const summary = document.createElement('summary')
    summary.textContent = menusStatus.charAt(0).toUpperCase() + menusStatus.slice(1) + 's'
    details.appendChild(summary)

    const lists = document.createElement('ol')

    menusStatus += 's'

    menus[menusStatus].forEach(menu => {
      const list = document.createElement('li')
      list.textContent = menu.name

      lists.appendChild(list)
    })

    details.appendChild(lists)

    return details
  },

  _reviews ({
    customerReviews
  }) {
    const reviewBox = document.createElement('review-box')
    reviewBox.setData = customerReviews

    return reviewBox
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

    const descriptions = this._descriptions({ descriptions: this._description })
    container.appendChild(descriptions)

    const foodMenu = this._menuList({
      menus: this._menus
    })
    container.appendChild(foodMenu)

    const drinkMenu = this._menuList({
      menus: this._menus,
      menusStatus: 'drink'
    })
    container.appendChild(drinkMenu)

    const hr = document.createElement('hr')
    container.appendChild(hr)

    const customerFeedbackBox = document.createElement('div')
    customerFeedbackBox.classList.add('customer-feedback-box')

    const customerFeedbackBoxTitle = document.createElement('h3')
    customerFeedbackBoxTitle.textContent = 'User Reviews'

    customerFeedbackBox.appendChild(customerFeedbackBoxTitle)

    this._customerReviews.forEach(review => {
      const reviewContainer = this._reviews({ customerReviews: review })

      customerFeedbackBox.appendChild(reviewContainer)
    })
    container.appendChild(customerFeedbackBox)

    return container
  }
}

export default DetailsTemplate
