import Drawer from '../utils/drawer-initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import ShowCurrentYear from '../utils/show-current-year'

class App {
  constructor ({
    drawer: {
      button,
      buttonIcon,
      drawerContent
    },
    content,
    footerYearContainerId
  }) {
    this._drawerButton = button
    this._drawerButtonIcon = buttonIcon
    this._drawerDrawerContent = drawerContent
    this._content = content
    this._footerYearContainerId = footerYearContainerId

    this._initAppShell()
  }

  _initAppShell () {
    Drawer.init({
      button: this._drawerButton,
      buttonIcon: this._drawerButtonIcon,
      drawer: this._drawerDrawerContent
    }).render()

    ShowCurrentYear.init({
      containerId: this._footerYearContainerId
    }).show()
  }

  async render () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    this._content.innerHTML = await page.render()
    await page.afterRender()

    const mainContent = document.querySelector('main[role="main"')
    const skipToContent = document.querySelector('.skip')
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault()
      mainContent.scrollIntoView({ behavior: 'smooth' })
      skipToContent.blur()
    })
  }
}

export default App
