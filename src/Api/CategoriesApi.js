const Service = require('./Service')

class CategoriesApi extends Service {
  getCategories () {
    return this.get(`/categories`)
  }
  createCategory (body) {
    return this.post(`/categories`, body)
  }
  getCategory (uuid) {
    return this.get(`/categories/${uuid}`)
  }
  updateCategory (uuid, body) {
    return this.put(`/categories/${uuid}`, body)
  }
  deleteCategory (uuid) {
    return this.delete(`/categories/${uuid}`)
  }
  getCategoryEntities (uuid) {
    return this.get(`/categories/${uuid}/entities`)
  }
  attachEntityToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/entities`, body)
  }
  detachEntityFromCategory (uuid, entityUuid) {
    return this.delete(`/categories/${uuid}/entities`, entityUuid)
  }
  getCategoryProducts (uuid) {
    return this.get(`/categories/${uuid}/products`)
  }
  attachProductToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/products`, body)
  }
  detachProductFromCategory (uuid, productUuid) {
    return this.delete(`/categories/${uuid}/products`, productUuid)
  }
  getCategorySubscriptions (uuid) {
    return this.get(`/categories/${uuid}/subscriptions`)
  }
  attachSubscriptionToCategory (uuid, body) {
    return this.post(`/categories/${uuid}/subscriptions`, body)
  }
  detachSubscriptionFromCategory (uuid, subscriptionUuid) {
    return this.delete(`/categories/${uuid}/subscriptions`, subscriptionUuid)
  }
  getEntityCategories (uuid) {
    return this.get(`/entities/${uuid}/categories`)
  }
  attachCategoryToEntity (uuid, body) {
    return this.post(`/entities/${uuid}/categories`, body)
  }
  detachCategoryFromEntity (uuid, categoryUuid) {
    return this.delete(`/entities/${uuid}/categories`, categoryUuid)
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
  getSubscriptionCategories (uuid) {
    return this.get(`/subscriptions/${uuid}/categories`)
  }
  attachCategoryToSubscription (uuid, body) {
    return this.post(`/subscriptions/${uuid}/categories`, body)
  }
  detachCategoryFromSubscription (uuid, categoryUuid) {
    return this.delete(`/subscriptions/${uuid}/categories`, categoryUuid)
  }
}

module.exports = CategoriesApi
