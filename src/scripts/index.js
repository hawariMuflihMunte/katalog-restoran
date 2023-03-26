import 'regenerator-runtime' /* for async await transpile */
import 'normalize.css'

import '../styles/main.scss'
import DATA from '../data/DATA.json'

async function main () {
  // try {
  //   const response = await fetch(DATA)
  //   console.log(response)
  // } catch (err) {
  //   console.log(err)
  // }
  console.log(DATA.restaurants)

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

main()
