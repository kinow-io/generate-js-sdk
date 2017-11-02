const Service = require('./Service')

class PricesApi extends Service {
  getProductPrices (uuid) {
    return this.get(`/products/products/${uuid}/prices`)
  }
  createPrice (body) {
    return this.post(`/prices`, body)
  }
  getPrice (uuid) {
    return this.get(`/prices/${uuid}`)
  }
  updatePrice (uuid, body) {
    return this.put(`/prices/${uuid}`, body)
  }
  deletePrice (uuid) {
    return this.delete(`/prices/${uuid}`)
  }
}

module.exports = PricesApi
