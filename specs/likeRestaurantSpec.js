/* eslint-disable no-undef */

import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator'

xdescribe('Liking restaurant', () => {
  const likeButtonContainer = () => {
    document.body.innerHTML = `
      <button class="add-to-favorite" title="Add to favorite list 🧡">
        🧡
      </button>
    `
  }

  beforeEach(() => {
    likeButtonContainer()
  })

  it('should display the favorite button', () => {
    //
  })
})
