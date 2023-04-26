const ShowCurrentYear = {
  init ({
    containerId
  }) {
    if (typeof containerId === 'string') {
      this._container = containerId
    } else {
      console.error('Inputted value is not a string!\nPlease provide a string of HTML id')
    }
  },
  show () {
    document.getElementById(this._container).innerHTML = `${+new Date().getFullYear()}`
  }
}

export default ShowCurrentYear
