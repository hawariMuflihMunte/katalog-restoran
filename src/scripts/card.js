class Card {
//   constructor (obj) {
//     this._data = obj
//   }

  static createCard (obj) {
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
    // cardElement.tabIndex = 0

    // Title
    const titleElement = document.createElement('h4')
    titleElement.textContent = name

    // City
    const cityElement = document.createElement('span')
    cityElement.classList.add('city')
    cityElement.textContent = city

    // Image
    const imageElement = document.createElement('img')
    imageElement.src = `${pictureId}`
    imageElement.loading = 'lazy'
    imageElement.alt = `Image of ${name}`

    // Description (show in dialog)
    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = description

    // Description dialog button
    const descriptionDialogElement = document.createElement('dialog')
    descriptionDialogElement.setAttribute('role', 'dialog')
    descriptionDialogElement.setAttribute('aria-modal', true)
    descriptionDialogElement.appendChild(descriptionElement)

    const confirmButton = document.createElement('button')
    confirmButton.textContent = 'OK'

    confirmButton.addEventListener('click', () => {
      descriptionDialogElement.close()
    })

    descriptionDialogElement.appendChild(confirmButton)

    const descriptionDialogButtonElement = document.createElement('button')
    descriptionDialogButtonElement.classList.add('details')
    descriptionDialogButtonElement.textContent = 'Details'

    descriptionDialogButtonElement.addEventListener('click', () => {
    //   descriptionDialogElement.open = true
      descriptionDialogElement.showModal()
    //   descriptionDialogElement.show()
    })

    // Rating
    const ratingElement = document.createElement('h3')
    ratingElement.textContent = `Rating ${rating}`

    // Output
    const outputElement = document.createElement('output')

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
}

export default Card
