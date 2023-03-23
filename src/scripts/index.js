import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import 'normalize.css'
import axios from 'axios'

async function main () {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime?q=chainsaw&sfw')
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}

main()
