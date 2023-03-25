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

  const btn = document.querySelector('.nav-drawer')
  const navDrawer = document.querySelector('.nav-menu')
  let clickedState = false

  btn.addEventListener('click', (event) => {
    if (clickedState) {
      navDrawer.classList.add('show')
      clickedState = false
    } else {
      navDrawer.classList.remove('show')
      clickedState = true
    }
  })
}

main()
