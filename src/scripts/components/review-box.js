/* eslint-disable accessor-pairs */
class ReviewBox extends HTMLElement {
  set setData (data) {
    this._data = data
  }

  connectedCallback () {
    this.render()
  }

  render () {
    const {
      name,
      date,
      review
    } = this._data

    this.innerHTML = `
      <div class="feedback-box">
        <h5 class="name">${name}</h5>
        <p class="date">${date}</p>
        <p class="review">${review}</p>
      </div>
    `
  }
}

customElements.define('review-box', ReviewBox)
