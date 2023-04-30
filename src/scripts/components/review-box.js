/* eslint-disable accessor-pairs */
class ReviewBox extends HTMLElement {
  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'closed' })

    const style = document.createElement('style')
    style.textContent = `
      .feedback-box {
        background-color: rgba(255, 255, 255, 1) !important;
        border: 1px solid rgba(0, 0, 0, 0.36);
        padding: 7.5px;
      }

      .feedback-box * {
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 0.75);
      }

      .feedback-box .name {
        color: rgba(0, 0, 0, 0.65);
      }

      .feedback-box .date {
        font-style: italic;
        color: rgba(0, 0, 0, 0.52);
      }

      .feedback-box .review {
        margin-top: 7.25px;
      }
    `

    this.shadow.appendChild(style)
  }

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

    const feedbackBox = document.createElement('div')
    feedbackBox.classList.add('feedback-box')

    const feedbackBoxName = document.createElement('h4')
    feedbackBoxName.classList.add('name')
    feedbackBoxName.textContent = name
    feedbackBox.appendChild(feedbackBoxName)

    const feedbackBoxDate = document.createElement('p')
    feedbackBoxDate.classList.add('date')
    feedbackBoxDate.textContent = date
    feedbackBox.appendChild(feedbackBoxDate)

    const feedbackBoxReview = document.createElement('p')
    feedbackBoxReview.classList.add('review')
    feedbackBoxReview.textContent = review
    feedbackBox.appendChild(feedbackBoxReview)

    this.shadow.appendChild(feedbackBox)
  }
}

customElements.define('review-box', ReviewBox)
