import 'regenerator-runtime' /* for async await transpile */
import 'normalize.css'

import '../styles/main.scss'
import DATA from '../data/DATA.json'
// import './components/card'

import Card from './card'

function renderCard () {
  // DishPlate Card
  const cardContainer = document.getElementById('menu')

  // DATA.restaurants.forEach(cardData => {
  //   const card = document.createElement('dishplate-card')
  //   card.data = cardData

  //   // console.log(card.data)

  //   cardContainer.appendChild(card)
  //   // console.log(card)
  // })

  DATA.restaurants.forEach(data => {
    const card = Card.createCard(data)

    cardContainer.appendChild(card)
  })
}

function btnNavbar () {
  // Nav
  const btn = document.querySelector('.nav-drawer')
  const btnIcon = document.querySelector('.nav-drawer span')
  const navDrawer = document.querySelector('.nav-menu')
  let clickedState = false

  btn.addEventListener('click', (event) => {
    if (clickedState) {
      navDrawer.classList.add('show')
      btnIcon.innerHTML = 'menu_open'
      clickedState = false
    } else {
      navDrawer.classList.remove('show')
      btnIcon.innerHTML = 'menu'
      clickedState = true
    }
  })
}

function footerShowYear () {
  // Footer
  const showYear = document.getElementById('year')
  showYear.innerHTML = `${+new Date().getFullYear()}`
}

function main () {
  // console.log(DATA.restaurants)
  btnNavbar()
  renderCard()
  footerShowYear()
}

main()
