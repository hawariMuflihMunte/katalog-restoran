import 'regenerator-runtime' /* for async await transpile */
import 'normalize.css'

import '../styles/main.scss'
import App from './views/app'

const app = new App({
  drawer: {
    button: document.querySelector('.nav-drawer'),
    buttonIcon: document.querySelector('.nav-drawer span'),
    drawerContent: document.querySelector('.nav-menu')
  },
  content: document.getElementById('content'),
  footerYearContainerId: document.querySelector('#year')
})

window.addEventListener('load', () => {
  app.render()
})

window.addEventListener('hashchange', () => {
  app.render()
})
