const ShowCurrentYear = {
  init ({
    containerId
  }) {
    this._container = containerId
    return this
  },
  show () {
    this._container.innerHTML = `${+new Date().getFullYear()}`
  }
}

export default ShowCurrentYear
