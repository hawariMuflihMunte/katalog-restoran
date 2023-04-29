/* eslint-disable accessor-pairs */
class ReviewBox extends HTMLElement {
  get getData () {
    return this._data
  }

  set setData ({ data }) {
    this._data = data

    /**
     * Datas that are required to be rendered:
     * 'name',
     * 'review',
     * 'date'
     */
  }

  connectedCallback () {
    this.render(this.getData)
  }

  render ({
    data
  }) {
    this.innerHTML = `
      <div>
        <h5>${data.name}</h5>
        <p>${data.date}</p>
        <p>${data.review}</p>
      </div>
    `
  }
}

customElements.define('review-box', ReviewBox)
