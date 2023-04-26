import Drawer from "../utils/drawer-initiator"
import UrlParser from "../routes/url-parser"
import routes from "../routes/routes"

class App {
  constructor ({
    drawer: {
      button,
      buttonIcon,
      drawerContent
    },
    content
  }) {
    this._drawerButton = button
    this._drawerButtonIcon = buttonIcon
    this._drawerDrawerContent = drawerContent
    this._content = content

    this._initAppShell()
  }

  _initAppShell () {
    Drawer.init({
      button: this._drawerButton,
      buttonIcon: this._drawerButtonIcon,
      drawer: this._drawerDrawerContent
    }).render()
  }

  async render () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
