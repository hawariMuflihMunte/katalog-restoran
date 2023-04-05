class CardComponent extends HTMLElement {
  get data () {
    return this._data
  }

  set data (data) {
    this._data = data
  }

  connectedCallback () {
    this.render()
  }

  createCard (obj) {
    const {
      id,
      name,
      description,
      pictureId,
      city,
      rating
    } = obj

    // Main wrapper
    const cardElement = document.createElement('div')
    cardElement.classList.add('card')
    cardElement.id = id
    cardElement.setAttribute('role', 'listitem')
    cardElement.tabIndex = 0

    // Title
    const titleElement = document.createElement('h4')
    titleElement.classList.add('title')
    titleElement.textContent = name

    // City
    const cityElement = document.createElement('span')
    cityElement.classList.add('city')
    cityElement.textContent = city

    // Image
    const imageElement = document.createElement('img')
    imageElement.classList.add('image')
    imageElement.src = `${pictureId}`
    imageElement.loading = 'lazy'
    imageElement.alt = `Image of ${name}`

    // Description (show in dialog)
    const descriptionElement = document.createElement('p')
    descriptionElement.classList.add('description')
    descriptionElement.textContent = description

    // Description dialog button
    const descriptionDialogElement = document.createElement('dialog')
    descriptionDialogElement.setAttribute('role', 'dialog')

    const confirmButton = document.createElement('button')
    confirmButton.classList.add('confirm')
    confirmButton.textContent = 'OK'

    descriptionDialogElement.setAttribute('aria-modal', true)

    const descriptionContainer = document.createElement('div')
    const descriptionContainerTitle = document.createElement('h2')
    const descriptionContainerSubtitle = document.createElement('h4')
    const descriptionContainerImage = document.createElement('img')

    descriptionContainer.setAttribute('role', 'article')

    descriptionContainerImage.src = pictureId
    descriptionContainerImage.alt = `Image of ${pictureId}`
    descriptionContainerImage.loading = 'lazy'
    descriptionContainerImage.style.objectFit = 'contain'
    descriptionContainerTitle.textContent = name
    descriptionContainerSubtitle.textContent = `Rating ${rating}`

    descriptionContainer.appendChild(descriptionContainerImage)
    descriptionContainer.appendChild(descriptionContainerSubtitle)
    descriptionContainer.appendChild(descriptionContainerTitle)
    descriptionContainer.appendChild(descriptionElement)
    descriptionContainer.appendChild(confirmButton)

    descriptionDialogElement.appendChild(descriptionContainer)

    const descriptionDialogButtonElement = document.createElement('button')
    descriptionDialogButtonElement.classList.add('details')
    descriptionDialogButtonElement.textContent = 'Details'
    descriptionDialogButtonElement.tabIndex = -1

    // Rating
    const ratingElement = document.createElement('h3')
    ratingElement.classList.add('rating')
    ratingElement.textContent = `Rating ${rating}`

    // Output
    const outputElement = document.createElement('output')

    descriptionDialogElement.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        descriptionDialogButtonElement.click()
      }
    })

    descriptionDialogButtonElement.addEventListener('click', () => {
      document.querySelector('body').style.overflow = 'hidden'
      document.querySelector('html').style.overflow = 'hidden'
      descriptionDialogElement.removeAttribute('open')
      descriptionDialogElement.showModal()
    })

    confirmButton.addEventListener('click', () => {
      document.querySelector('body').style.overflow = 'visible'
      document.querySelector('html').style.overflow = 'visible'
      document.querySelector('html').style.overflowX = 'hidden'
      descriptionDialogElement.close('Confirmed')
    })

    cardElement.addEventListener('keypress', (e) => {
      /*
       * Debugging purposes
       */
      // console.log(e)

      if (e.key === 'Enter') {
        descriptionDialogButtonElement.click()
      }
    })

    cardElement.append(
      imageElement,
      cityElement,
      ratingElement,
      titleElement,
      descriptionDialogElement,
      descriptionDialogButtonElement,
      outputElement
    )

    return cardElement
  }

  render () {
    this.content = this.createCard(this.data)
    this.appendChild(this.content)
  }
}

customElements.define('card-component', CardComponent)
