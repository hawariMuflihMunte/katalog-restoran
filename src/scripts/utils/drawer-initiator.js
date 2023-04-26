const Drawer = {
  init ({
    button,
    buttonIcon,
    drawer
  }) {
    this._button = button
    this._buttonIcon = buttonIcon
    this._drawer = drawer

    return this
  },
  render () {
    let clickedState = false

    this._button.addEventListener('click', () => {
      if (clickedState) {
        this._drawer.classList.add('show')
        this._buttonIcon.innerHTML = 'menu_open'
        this._drawer.setAttribute('aria-expanded', true)

        clickedState = false
      } else {
        this._drawer.classList.remove('show')
        this._buttonIcon.innerHTML = 'menu'
        this._drawer.setAttribute('aria-expanded', false)

        clickedState = true
      }
    })
  }
}

export default Drawer
