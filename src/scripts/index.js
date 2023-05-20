import 'regenerator-runtime' /* for async await transpile */
import 'normalize.css'

import '../styles/main.scss'
import App from './views/app'
import swRegister from './utils/sw-register'

import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  drawer: {
    button: document.querySelector('.nav-drawer'),
    buttonIcon: document.querySelector('.nav-drawer span'),
    drawerContent: document.querySelector('.nav-menu')
  },
  content: document.querySelector('main'),
  footerYearContainerId: document.querySelector('#year')
})

window.addEventListener('load', () => {
  app.render()
  swRegister()
})

window.addEventListener('hashchange', () => {
  app.render()
})
