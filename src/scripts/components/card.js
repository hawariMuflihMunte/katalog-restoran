class DishPlateCard extends HTMLElement {
  set data (obj) {
    this._data = obj
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
      <a href="" class="card" id="${this._data.id}">
        <div class="header">
          <div class="pin">
              ${this._data.city}
          </div>
          <img src="${this._data.pictureId}" alt="${this._data.name}" loading="lazy">
        </div>
        <div class="content">
          <h4 class="rating">Rating ${this._data.rating}</h4>
          <h3 class="title">${this._data.name}</h3>
          <p class="description">${this._data.description}</p>
        </div>
      </a>
    `
  }
}

customElements.define('dishplate-card', DishPlateCard)
