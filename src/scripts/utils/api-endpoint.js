const ApiEndpoint = {
  init ({
    BASE_API_URL
  }) {
    this._BASE_API_URL = BASE_API_URL
  },

  async getList () {
    try {
      const result = await fetch(`${this._BASE_API_URL}/list`)
      const data = result.json()

      console.log(data)

      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async getDetail (id) {
    try {
      const result = await fetch(`${this._BASE_API_URL}/detail/${id}`)
      const data = result.json()

      console.log(data)

      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async searchData (query) {
    try {
      const result = await fetch(`${this._BASE_API_URL}/search?q=${query}`)
      const data = result.json()

      console.log(data)

      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async addReview ({
    id,
    name,
    review
  }) {
    this._id = id
    this._name = name
    this._review = review

    try {
      const result = await fetch(`${this._BASE_API_URL}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this._id,
          name: this._name,
          review: this._review
        })
      })
      const data = result.json()

      console.log(data)

      return data
    } catch (error) {
      console.error(error)
      return false
    }
  },

  async getImage (id, size = 'medium') {
    try {
      const result = await fetch(`${this._BASE_API_URL}/images/${size}/${id}`)
      const data = result.json()

      console.log(data)

      return data
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default ApiEndpoint
