class DishPlateCard extends HTMLElement {
  set data (obj) {
    this._data = obj
  }

  // eslint-disable-next-line accessor-pairs
  set clickEvent (_event) {
    this._clickEvent = _event
  }

  get data () {
    return this._data
  }

  connectedCallback () {
    this.renderHTML()
  }

  renderHTML () {
    console.log(this._data)

    this.innerHTML = `
      <div class="card" aria-label="Card details">
        <div class="header" aria-label="Card header">
          <div class="pin" aria-label="City info">
              ${this._data.city}
          </div>
          <img src="${this._data.pictureId}" alt="${this._data.name}" loading="lazy">
        </div>
        <div class="content" aria-label="Card Content">
          <h3 class="rating" aria-label="Rating info">Rating ${this._data.rating}</h3>
          <h4 class="title" aria-label="Card title">${this._data.name}</h4>
          <p class="description" aria-label="Card long description">${this._data.description}</p>
        </div>
      </div>
    `

    this.setAttribute('role', 'listitem')
    this.setAttribute('id', `${this._data.id}`)
    this.setAttribute('tabindex', '0')
  }
}

customElements.define('dishplate-card', DishPlateCard)
