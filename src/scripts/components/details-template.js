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

  render () {
    const container = document.createElement('article')
    container.classList.add('details')

    const image = document.createElement('img')
    image.classList.add('details-image')
    image.loading = 'lazy'
    image.src = `${this._BASE_API_IMAGE_URL}${this._pictureId}`
    image.alt = `Picture of ${this._name}`
    container.append(image)

    return container
  }
}

export default DetailsTemplate
