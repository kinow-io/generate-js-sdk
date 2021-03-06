const axios = require('axios')
const ResponseError = require('./ResponseError')

class Service {
  constructor (config = {}) {
    this.host = 'http://api-gateway.dev'
    this.path = '/api'
    this.headers = config.headers || {}
    this.timeout = config.timeout || 1000
  }
  get client () {
    if (!this._client) {
      this._client = axios.create({
        baseURL: `${this.host}${this.path}/${this.service}/`,
        headers: this.headers
      })
    }
    return this._client
  }
  getUrl (url) {
    return `${this.host}${this.path}/${this.service}/${url}`
  }
  async get (url) {
    try {
      let response = await this.client.get(url)
      return response.data
    } catch (e) {
      throw new ResponseError(e)
    }
  }
  async post (url, body) {
    try {
      let response = await this.client.post(url, body)
      return response.data
    } catch (e) {
      throw new ResponseError(e)
    }
  }
  async put (url, body) {
    try {
      let response = await this.client.put(url, body)
      return response.data
    } catch (e) {
      throw new ResponseError(e)
    }
  }
  async delete (url, body) {
    try {
      let response = await this.client.delete(url, body)
      return response.data
    } catch (e) {
      throw new ResponseError(e)
    }
  }
}

module.exports = Service
