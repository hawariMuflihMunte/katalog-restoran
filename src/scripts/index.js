import 'regenerator-runtime' /* for async await transpile */
import 'normalize.css'

import '../styles/main.scss'
import DATA from '../data/DATA.json'

import './components/card'

// function renderCard () {
//   const cardContainer = document.getElementById('menu')

//   DATA.restaurants.forEach(data => {
//     const card = document.createElement('card-component')
//     card.data = data

//     cardContainer.appendChild(card)
//   })
// }

// function btnNavbar () {
//   const btn = document.querySelector('.nav-drawer')
//   const btnIcon = document.querySelector('.nav-drawer span')
//   const navDrawer = document.querySelector('.nav-menu')
//   let clickedState = false

//   btn.addEventListener('click', () => {
//     if (clickedState) {
//       navDrawer.classList.add('show')
//       btnIcon.innerHTML = 'menu_open'
//       btn.setAttribute('aria-expanded', true)
//       clickedState = false
//     } else {
//       navDrawer.classList.remove('show')
//       btnIcon.innerHTML = 'menu'
//       btn.setAttribute('aria-expanded', false)
//       clickedState = true
//     }
//   })
// }

// function footerShowYear () {
//   const showYear = document.getElementById('year')
//   showYear.innerHTML = `${+new Date().getFullYear()}`
// }

// function main () {
//   btnNavbar()
//   renderCard()
//   footerShowYear()
// }

// main()

import App from './views/app'

// eslint-disable-next-line no-unused-vars
const app = new App({
  drawer: {
    button: document.querySelector('.nav-drawer'),
    buttonIcon: document.querySelector('.nav-drawer span'),
    drawerContent: document.querySelector('.nav-menu')
  },
  content: document.getElementById('menu'),
  footerYearContainerId: document.querySelector('#year')
})

window.addEventListener('hashchange', () => {
  app.render()
})
