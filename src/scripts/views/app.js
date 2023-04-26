import Drawer from "../utils/drawer-initiator"

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
}

export default App
