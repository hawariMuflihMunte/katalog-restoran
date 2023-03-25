import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import 'normalize.css'
import DATA from '../data/DATA.json'

async function main () {
  try {
    const response = await fetch(DATA)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

main()
