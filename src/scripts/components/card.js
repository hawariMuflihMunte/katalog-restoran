import CONFIG from '../global/config'

const Card = {
  init (data) {
    this._data = data
    this._BASE_API_IMAGE_URL = CONFIG.BASE_API_IMAGE_URL

    return this
  },

  render () {
    const content = document.createElement('div')
    content.classList.add('card')
    content.setAttribute('role', 'listitem')

    const image = document.createElement('img')
    image.classList.add('card-img', 'lazyload')
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/128px-Placeholder_view_vector.svg.png'
    image.setAttribute('data-src', `${this._BASE_API_IMAGE_URL}${this._data.pictureId}`)
    image.setAttribute('crossorigin', 'anonymous')
    image.alt = `Picture of ${this._data.name}`
    content.append(image)

    const city = document.createElement('span')
    city.classList.add('card-city')
    city.textContent = this._data.city
    city.title = this._data.city
    content.appendChild(city)

    const rating = document.createElement('div')
    rating.classList.add('card-rating')
    rating.textContent = `⭐ ${this._data.rating}`
    rating.title = `Rating ${this._data.rating}`
    content.appendChild(rating)

    const title = document.createElement('h3')
    title.classList.add('card-title')
    const link = document.createElement('a')
    link.href = `/#/detail/${this._data.id}`
    link.textContent = this._data.name
    title.title = `${this._data.name}. Click to view details`
    title.appendChild(link)
    content.appendChild(title)

    const description = document.createElement('p')
    description.classList.add('card-description')
    description.textContent = this._data.description

    return content
  }
}

export default Card
