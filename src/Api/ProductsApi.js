const Service = require('./Service')

class ProductsApi extends Service {
  getCategoryProducts (uuid) {
    return this.get(`/categories/${uuid}/products`)
  }
  attachProductToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/products`, body)
  }
  detachProductFromCategory (uuid, productUuid) {
    return this.delete(`/categories/${uuid}/products`, productUuid)
  }
  getEntityProducts (uuid) {
    return this.get(`/entities/${uuid}/products`)
  }
  attachProductToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/products`, body)
  }
  detachProductFromEntity (uuid, productUuid) {
    return this.delete(`/entities/${uuid}/products`, productUuid)
  }
  getMediaProducts (uuid) {
    return this.get(`/medias/${uuid}/products`)
  }
  attachProductToMedia (uuid, body) {
    return this.post(`/medias/${uuid}/products`, body)
  }
  detachProductFromMedia (uuid, productUuid) {
    return this.delete(`/medias/${uuid}/products`, productUuid)
  }
  getProducts () {
    return this.get(`/products`)
  }
  createProduct (body) {
    return this.post(`/products`, body)
  }
  getProduct (uuid) {
    return this.get(`/products/${uuid}`)
  }
  updateProduct (uuid, body) {
    return this.put(`/products/${uuid}`, body)
  }
  deleteProduct (uuid) {
    return this.delete(`/products/${uuid}`)
  }
  getProductCategories (uuid) {
    return this.get(`/products/${uuid}/categories`)
  }
  attachCategoryToProduct (uuid, body) {
    return this.post(`/products/${uuid}/categories`, body)
  }
  detachCategoryFromProduct (uuid, categoryUuid) {
    return this.delete(`/products/${uuid}/categories`, categoryUuid)
  }
  getProductEntities (uuid) {
    return this.get(`/products/${uuid}/entities`)
  }
  attachEntityToProduct (uuid, body) {
    return this.post(`/products/${uuid}/entities`, body)
  }
  detachEntityFromProduct (uuid, entityUuid) {
    return this.delete(`/products/${uuid}/entities`, entityUuid)
  }
  getProductMedias (uuid) {
    return this.get(`/products/${uuid}/medias`)
  }
  attachMediaToProduct (uuid, body) {
    return this.post(`/products/${uuid}/medias`, body)
  }
  detachMediaFromProduct (uuid, mediaUuid) {
    return this.delete(`/products/${uuid}/medias`, mediaUuid)
  }
  getProductPrices (uuid) {
    return this.get(`/products/products/${uuid}/prices`)
  }
  getSubscriptionCategories (uuid) {
    return this.get(`/subscriptions/${uuid}/categories`)
  }
  getSubscriptionProducts (uuid) {
    return this.get(`/subscriptions/${uuid}/products`)
  }
  attachProductToSubscription (uuid, body) {
    return this.post(`/subscriptions/${uuid}/products`, body)
  }
  detachProductFromSusbcription (uuid, productUuid) {
    return this.delete(`/subscriptions/${uuid}/products`, productUuid)
  }
}

module.exports = ProductsApi
